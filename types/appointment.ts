export interface Root {
    date: string
    time: string
    practitioner: Practitioner
    user: User
    id: number
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
  
  export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
  }