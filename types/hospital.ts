export interface HospitalProps {
    id: number
    name: string
    address: string
    city: string
    state: string
}

export interface SingleHospital {
    id: number
    name: string
    address: string
    city: string
    state: string
    practitioners: HospitalPractioners[]
  }
  
  export interface HospitalPractioners {
    id: number
    first_name: string
    last_name: string
    email: string
    bio: string
    specialization: string
    photoUrl: string
  }