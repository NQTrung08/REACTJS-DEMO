import { makeAutoObservable, observable } from "mobx";

export class AdvanceRefundFormModel {
  @observable id: string = ""; // Mã phiếu tạm ứng
  @observable creator: string = ""; // Người tạo
  @observable requester: string = ""; // Người đề nghị
  @observable beneficiary: string = ""; // Người thụ hưởng
  @observable approver: string = ""; // Người phê duyệt
  @observable department: string = ""; // Phòng ban
  @observable createAt: string = ""; // Ngày tạo
  @observable requestDate: string = ""; // Ngày tạm ứng
  @observable refundDeadline: string = ""; // Hạn hoàn
  @observable amount: number = 0; // Số tiền tạm ứng
  @observable content: string = ""; // Nội dung tạm ứng
  @observable attachedDocuments: File[] = []; // Tài liệu đính kèm

  constructor() {
    makeAutoObservable(this); // Tự động quan sát mọi thuộc tính của class
  }

}