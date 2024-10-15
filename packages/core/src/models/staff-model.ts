

export interface IStaff {
  id: number
  fullName: string
  middleName: string
  username: string
  password: string
  phone: string
  email: string
  role: string
  manager: string
  avatar: string
  status: string
}

export class StaffModel implements IStaff {
  id: number = 0
  fullName: string = ''
  middleName: string = ''
  username: string = ''
  password: string = ''
  phone: string = ''
  email: string = ''
  role: string = 'staff'
  manager: string = 'Nghia Tran'
  avatar: string = ''
  status: string = 'active'
  confirmPassword: string = ''
}