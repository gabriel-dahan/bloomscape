import { BackendMethod, remult } from 'remult'
import { ReportType, ReportStatus } from '@/shared/types'
import { UserReport } from '@/shared/analytics/UserReport'
import { UserNotification } from '@/shared/user/UserNotification'

export class ReportController {
  @BackendMethod({ allowed: true }) // Autorisé à tout utilisateur connecté
  static async submitReport(data: { type: ReportType; title: string; description: string }) {
    // 1. Validation de sécurité (Backend)
    if (!remult.user) throw new Error('You must be logged in to submit a report.')

    if (!data.title || data.title.trim().length < 5) {
      throw new Error('Title is too short (min 5 characters).')
    }
    if (!data.description || data.description.trim().length < 10) {
      throw new Error('Description is too short. Please provide details.')
    }

    // 2. Anti-spam (Optionnel : vérifier le dernier rapport de cet user)
    const repo = remult.repo(UserReport)

    // Exemple simple : Empêcher de poster plus de 1 rapport toutes les 30 secondes
    const lastReport = await repo.findFirst(
      { reporterId: remult.user.id },
      { orderBy: { createdAt: 'desc' } },
    )

    if (lastReport && lastReport.createdAt) {
      const diff = new Date().getTime() - lastReport.createdAt.getTime()
      if (diff < 30 * 1000) {
        throw new Error('Please wait 30 seconds before sending another report.')
      }
    }

    // 3. Insertion en base
    const report = await repo.insert({
      reporterId: remult.user.id,
      type: data.type,
      title: data.title.trim(),
      description: data.description.trim(),
      createdAt: new Date(),
      status: 'OPEN',
    })

    return report
  }

  @BackendMethod({ allowed: 'admin' })
  static async resolveReport(reportId: string, status: ReportStatus, message: string) {
    const repo = remult.repo(UserReport)
    const report = await repo.findId(reportId)

    if (!report) throw new Error('Report not found')

    report.status = status
    report.resolvedAt = new Date()
    await repo.save(report)

    const notificationRepo = remult.repo(UserNotification)
    await notificationRepo.insert({
      userId: report.reporterId,
      title: 'Support Request Update',
      message: `Your report "${report.title}" was updated to ${status}.\n\nAdmin message: ${message}`,
      type: status === 'RESOLVED' ? 'success' : 'info',
      createdAt: new Date(),
    })

    // Real-time event
    const { ServerEvents } = await import('../server-events')
    ServerEvents.notifyUser(
      report.reporterId,
      'Support Request Update',
      `Your report "${report.title}" has been updated.`,
      status === 'RESOLVED' ? 'success' : 'info',
    )

    return { success: true }
  }
}
