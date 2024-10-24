import { makeAutoObservable, observable } from "mobx";

export class AdvanceRefundModel {
  @observable id: number = Date.now(); // Mã phiếu tạm ứng
  @observable creator: string = ""; // Người tạo
  @observable requester: string = ""; // Người đề nghị
  @observable beneficiary: string = ""; // Người thụ hưởng
  @observable beneficiaryAccount = {
    accountNumber: "", // Số tài khoản
    bank: "", // Ngân hàng
    accountImage: "" // Hình ảnh tài khoản
  }; // Tài khoản hưởng thụ
  @observable approver: string = ""; // Người phê duyệt
  @observable status: string = ""; // Trảng thái
  @observable department: string = ""; // Phòng ban
  @observable createAt: string = new Date().toISOString().split('T')[0];
  @observable requestDate: string = ""; // Ngày tạm ứng
  @observable actualRefundDate = ""; // ngày thực hoàn
  @observable overdue: number = 0;
  @observable refundDeadline: string = ""; // Hạn hoàn
  @observable advanceAmount: number = 0; // Số tiền tạm ứng
  @observable content: string = ""; // Nội dung tạm ứng
  @observable attachedDocuments: File[] = []; // Tài liệu đính kèm

  constructor() {
    makeAutoObservable(this); // Tự động quan sát mọi thuộc tính của class
  }

}
