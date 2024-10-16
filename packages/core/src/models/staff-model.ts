import { action, makeAutoObservable, observable } from "mobx"


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
  @observable id: number
  @observable fullName: string
  @observable middleName: string
  @observable username: string
  @observable password: string
  @observable phone: string
  @observable email: string
  @observable role: string
  @observable manager: string
  @observable avatar: string
  @observable status: string
  @observable confirmPassword: string

  constructor({
    id = 0,
    fullName = '',
    middleName = '',
    username = '',
    password = '',
    phone = '',
    email = '',
    role = 'staff',
    manager = 'Nghia Tran',
    avatar = '',
    status = 'active',
    confirmPassword = '',
  } = {}) {
    makeAutoObservable(this);
    this.id = id;
    this.fullName = fullName;
    this.middleName = middleName;
    this.username = username;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.role = role;
    this.manager = manager;
    this.avatar = avatar;
    this.status = status;
    this.confirmPassword = confirmPassword;
  }

  @action
  setId(id: number) {
    this.id = id;
  }
  @action
  setStatus(status: string) {
    this.status = status
  }

  @action
  setFullName(fullName: string) {
    this.fullName = fullName;
  }

  @action
  setMiddleName(middleName: string) {
    this.middleName = middleName;
  }
  @action
  setUsername(username: string) {
    this.username = username;
  }

  @action
  setPhone(phone: string) {
    this.phone = phone;
  }

  @action
  setEmail(email: string) {
    this.email = email;
  }

  @action
  setManager(manager: string) {
    this.manager = manager;
  }

  @action
  setAvatar(avatar: string) {
    this.avatar = avatar;
  }

  @action
  setPassword(password: string) {
    this.password = password;
  }

  @action
  setConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
  }

  @action
  setRole(role: string) {
    this.role = role;
  }

  @action
  setAll(data: Partial<IStaff>) {
    Object.assign(this, data);
  }

  // Getter để trả về tên đầy đủ bao gồm cả middleName
  get fullNameWithMiddle() {
    return `${this.fullName} ${this.middleName}`.trim();
  }

  

  // Getter để kiểm tra xem nhân viên có vai trò là quản lý không
  get isManager() {
    return this.role === 'manager';
  }

  // Getter để kiểm tra mật khẩu và confirmPassword có trùng nhau không
  get isPasswordConfirmed() {
    return this.password === this.confirmPassword;
  }

  // Getter để trả về thông tin ngắn gọn của nhân viên
  get shortInfo() {
    return `${this.fullNameWithMiddle} (${this.username}), ${this.phone}`;
  }

  // Getter để kiểm tra nhân viên có trạng thái hoạt động không
  get isActive() {
    return this.status === 'active';
  }

  // Getter để kiểm tra email có hợp lệ không
  get isEmailValid() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(this.email);
  }

  // Getter để kiểm tra số điện thoại có hợp lệ không
  get isPhoneValid() {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(this.phone);
  }

  // Getter để trả về thông tin chi tiết của nhân viên
  get detailedInfo() {
    return {
      id: this.id,
      fullName: this.fullNameWithMiddle,
      username: this.username,
      phone: this.phone,
      email: this.email,
      role: this.role,
      status: this.status,
      manager: this.manager,
    };
  }


}