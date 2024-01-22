export type Root = Root2[]

export interface Root2 {
  id: number
  date: string
  time: string
  status: string
  practitioner: Practitioner
}

export interface Practitioner {
  id: number
  first_name: string
  last_name: string
  email: string
  bio: string
  specialization: string
  photoUrl: string
}