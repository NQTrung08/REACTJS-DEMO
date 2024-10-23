import { makeAutoObservable } from "mobx";

class AdvanceRefundStore {
  advances = [
    {
      id: 1,
      status: 'not_collected',
      overdue: 0,
      refundDeadline: '22/03/2024',
      actualRefundDate: '',
      beneficiary: 'Lê Tuấn Khải',
      advanceAmount: 1000000,
      requestDate: '22/03/2024',
      beneficiaryAccount: {
        accountNumber: '123456789',
        bank: 'MSB',
        accountImage: ''
      },
    },
    {
      id: 2,
      status: 'overdue',
      overdue: 12,
      refundDeadline: '22/03/2024',
      actualRefundDate: '01/04/2024',
      beneficiary: 'Nguyễn Doãn Minh Giang',
      advanceAmount: 20000000,
      requestDate: '15/03/2024',
      beneficiaryAccount: {
        accountNumber: '987654321',
        bank: 'Vietcombank',
        accountImage: ''
      },
    },
    {
      id: 3,
      status: 'completed',
      refundDeadline: '10/04/2024',
      requestDate: '01/04/2024',
      beneficiary: 'Hoàng Văn Nam',
      advanceAmount: 5000000,
      beneficiaryAccount: {
        accountNumber: '234567890',
        bank: 'Vietinbank',
        accountImage: ''
      }
    }
    // Thêm các dữ liệu khác
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get dueAndOverdueAdvances() {
    return this.advances
  }

  get newAdvances() {
    return this.advances
  }

  get allAdvances() {
    return this.advances; // Tất cả dữ liệu
  }

  get proceedingAdvances() {
    return this.advances
  }

  get completedAdvances() {
    return this.advances
  }

  get rejectedAdvances() {
    return this.advances
  }

  // Thêm các getter khác nếu cần cho các tab khác
}

const advanceRefundStore = new AdvanceRefundStore();
export default advanceRefundStore;
