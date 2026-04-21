import { Entity, Fields } from 'remult'

@Entity('patch_notes', {
  allowApiCrud: 'admin',
  allowApiRead: true,
  defaultOrderBy: { createdAt: 'desc' },
})
export class PatchNote {
  @Fields.uuid()
  id!: string

  @Fields.string()
  title!: string

  @Fields.string()
  version: string = 'v1.0.0'

  @Fields.string()
  content: string = ''

  @Fields.createdAt()
  createdAt?: Date

  @Fields.boolean()
  isPublished: boolean = false
}
