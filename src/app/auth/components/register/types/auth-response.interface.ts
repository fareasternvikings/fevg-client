import {CurrentUserInterface} from '../../../../shared/types/current-user.interface'

export interface AuthResponseInterface {
  jwt: string
  user: CurrentUserInterface
}
