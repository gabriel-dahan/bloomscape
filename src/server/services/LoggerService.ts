import { remult } from 'remult'
import { SystemLog, LogLevel, LogSource } from '@/shared/analytics/SystemLog'

export class LoggerService {
  static async log(
    level: LogLevel,
    source: LogSource,
    message: string,
    userId?: string,
    targetId?: string
  ) {
    if (typeof window !== 'undefined') return; // Prevent execution on client

    try {
      await remult.repo(SystemLog).insert({
        level,
        source,
        message,
        userId,
        targetId
      })
    } catch (error) {
      console.error('CRITICAL: Complete failure writing to SystemLog', error)
      console.log(`[${level}] [${source}] ${message}`)
    }
  }

  static info(source: LogSource, message: string, userId?: string, targetId?: string) {
    return this.log(LogLevel.INFO, source, message, userId, targetId)
  }

  static warn(source: LogSource, message: string, userId?: string, targetId?: string) {
    return this.log(LogLevel.WARN, source, message, userId, targetId)
  }

  static error(source: LogSource, message: string, userId?: string, targetId?: string) {
    return this.log(LogLevel.ERROR, source, message, userId, targetId)
  }

  static success(source: LogSource, message: string, userId?: string, targetId?: string) {
    return this.log(LogLevel.SUCCESS, source, message, userId, targetId)
  }
}
