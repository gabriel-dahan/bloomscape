import { Entity, Fields } from 'remult'

@Entity('flower_families', { allowApiCrud: 'admin', allowApiRead: true })
export class FlowerFamily {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name!: string

  @Fields.string()
  description: string = ''

  @Fields.string()
  color: string = '#10b981'
}
