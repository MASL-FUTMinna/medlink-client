export type Root = PractitionerProp[]

export interface PractitionerProp {
  id: number
  first_name: string
  last_name: string
  email: string
  bio: string
  specialization: string
  photoUrl: string
  hospital?: Hospital
  hospital_name?: string
}

export interface Hospital {
  id: number
  name: string
  address: string
  city: string
  state: string
}
