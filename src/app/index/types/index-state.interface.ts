import {IndexPageInterface} from './index-page.interface'
import {BackendErrorsInterface} from '../../shared/types/backend-errors.interface'

export interface IndexStateInterface {
  isLoading: boolean
  page: IndexPageInterface | null
  backendErrors: BackendErrorsInterface | null
}
