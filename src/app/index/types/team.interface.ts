import {ImageInterface} from '../../shared/types/image.interface'

export interface TeamMemberInterface {
  id: number
  name: string
  description: string
  image: {
    data: ImageInterface
  }
}

export interface TeamInterface {
  id: number
  member: TeamMemberInterface[]
}
