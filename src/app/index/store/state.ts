import {IndexStateInterface} from '../types/index-state.interface'

export const INDEX_FEATURE = 'index'

export const initialState: IndexStateInterface = {
  isLoading: false,
  page: null,
  backendErrors: null,
}
