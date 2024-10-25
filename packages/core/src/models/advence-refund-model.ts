import { action, makeAutoObservable, observable } from "mobx";
import {TAB_ADVANCE_REFUND} from "../params";

export class AdvanceRefundModel {
  @observable id: number = Date.now(); // Mã phiếu tạm ứng
  @observable creator: string = "Lê Quang Khải"; // Người tạo
  @observable requester: string = ""; // Người đề nghị
  @observable beneficiary: string = ""; // Người thụ hưởng
  @observable beneficiaryAccount = {
    accountNumber: "", // Số tài khoản
    bank: "", // Ngân hàng
    accountImage: "" // Hình ảnh tài khoản
  }; // Tài khoản hưởng thụ
  @observable approver: string = ""; // Người phê duyệt
  @observable status: string = "new"; // Trảng thái
  @observable department: string = "Developement"; // Phòng ban
  @observable createAt: string = new Date().toISOString().split('T')[0];
  @observable requestDate: string = ""; // Ngày tạm ứng
  @observable actualRefundDate = ""; // ngày thực hoàn
  @observable overdue: number = 0; // quá hạn
  @observable refundDeadline: string = new Date().toISOString().split('T')[0]; // Hạn hoàn
  @observable advanceAmount: number = 0; // Số tiền tạm ứng
  @observable content: string = ""; // Nội dung tạm ứng
  @observable attachedDocuments: File[] = []; // Tài liệu đính kèm

  constructor() {
    makeAutoObservable(this); // Tự động quan sát mọi thuộc tính của class
  }

  @action
  setAll(data: Partial<AdvanceRefundModel>) {
    Object.assign(this, data);
  }

}
