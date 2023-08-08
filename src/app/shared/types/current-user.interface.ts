export interface CurrentUserPersonalInterface {
  lastName: string
  firstName: string
  middleName: string
  age: number
  phone: string
}

export interface CurrentUserInterface {
  id: string
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  personal: CurrentUserPersonalInterface
}
