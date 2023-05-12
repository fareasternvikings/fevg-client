export interface TeamMemberInterface {
  id: number
  name: string
  description: string
}

export interface TeamInterface {
  id: number
  member: TeamMemberInterface[]
}
