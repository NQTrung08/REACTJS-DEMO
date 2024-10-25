import { observer } from "mobx-react-lite";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundModel } from "../../../models";


interface ManagerRefundContextType {
  isCreateOrUpdate: boolean;
  onCreateOrUpdate: (value: boolean) => void;
  handleCancel: () => void,
  addAdvancePerson: (advance: AdvanceRefundModel) => void;
  advancePerson: AdvanceRefundModel[];
}

export const ManagerRefundContext = createContext<ManagerRefundContextType>({
  isCreateOrUpdate: false,
  onCreateOrUpdate: () => { },
  handleCancel: () => { },
  advancePerson: [],
  addAdvancePerson: (advance: AdvanceRefundModel) => { }
})


interface IProps {
  children: ReactNode
}

const data = [
  {
    id: 1,
    creator: 'Nguyễn Văn A',
    requester: 'Lê Văn B',
    beneficiary: 'Trần Thị C',
    beneficiaryAccount: {
      accountNumber: '123456789',
      bank: 'MSB',
      accountImage: '',
    },
    approver: 'Nguyễn Văn D',
    status: 'not_collected',
    department: 'Kế Toán',
    createAt: '2024-03-22',
    requestDate: '2024-03-22',
    actualRefundDate: '',
    overdue: 0,
    refundDeadline: '2024-03-22',
    advanceAmount: 1000000,
    content: 'Tạm ứng mua văn phòng phẩm',
    attachedDocuments: [],
  },
  {
    id: 2,
    creator: 'Nguyễn Văn A',
    requester: 'Lê Văn B',
    beneficiary: 'Phạm Văn D',
    beneficiaryAccount: {
      accountNumber: '987654321',
      bank: 'Vietcombank',
      accountImage: '',
    },
    approver: 'Nguyễn Văn E',
    status: 'overdue',
    department: 'Nhân Sự',
    createAt: '2024-03-10',
    requestDate: '2024-03-15',
    actualRefundDate: '2024-04-01',
    overdue: 12,
    refundDeadline: '2024-03-22',
    advanceAmount: 20000000,
    content: 'Tạm ứng chi phí hội nghị',
    attachedDocuments: [],
  },
  {
    id: 3,
    creator: 'Nguyễn Quang E',
    requester: 'Lê Lai',
    beneficiary: 'Phạm Văn D',
    beneficiaryAccount: {
      accountNumber: '987654321',
      bank: 'Vietcombank',
      accountImage: '',
    },
    approver: 'Nguyễn Văn E',
    status: 'completed',
    department: 'Nhân Sự',
    createAt: '2024-03-10',
    requestDate: '2024-03-15',
    actualRefundDate: '2024-04-01',
    overdue: 12,
    refundDeadline: '2024-03-22',
    advanceAmount: 20000000,
    content: 'Tạm ứng chi phí hội nghị',
    attachedDocuments: [],
  },
]

const ManagerRefundContextProvider = observer(({ children } : IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [advancePerson, setAdvancePerson] = useState<AdvanceRefundModel[]>(data);
  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };

  const handleCancel = () => {
    onCreateOrUpdate(false);
  };

  const addAdvancePerson = (advance: AdvanceRefundModel) => {
    console.log('advance', advance);
    setAdvancePerson((prevAdvancePerson) => {
      const newList = [...prevAdvancePerson, advance];
      return newList;
    });
  };
  

  return (
    <ManagerRefundContext.Provider value={{ isCreateOrUpdate, onCreateOrUpdate,
      handleCancel,
      addAdvancePerson,
      advancePerson
     }}>
      {children}
    </ManagerRefundContext.Provider>
  );
});

const useManagerRefundContext = () => {
  return useContext(ManagerRefundContext);
};


export { ManagerRefundContextProvider, useManagerRefundContext };




