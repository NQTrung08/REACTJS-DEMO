import { observer } from "mobx-react-lite";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundModel } from "../../../models";


interface ManagerRefundContextType {
  isCreateOrUpdate: boolean;
  onCreateOrUpdate: (value: boolean) => void;
  addAdvancePerson: (advance: AdvanceRefundModel) => void;
  advancePerson: AdvanceRefundModel[];
  itemUpdate: AdvanceRefundModel | null;
  setItemUpdate: (advance: AdvanceRefundModel) => void;
}

export const ManagerRefundContext = createContext<ManagerRefundContextType>({
  isCreateOrUpdate: false,
  onCreateOrUpdate: () => { },
  advancePerson: [],
  addAdvancePerson: (advance: AdvanceRefundModel) => { },
  itemUpdate: null,
  setItemUpdate: () => { },
})


interface IProps {
  children: ReactNode
}

const data = [
  {
    id: 1,
    creator: 'Nguyễn Văn A',
    requester: 'Lê Văn B',
    beneficiary: 'Nguyễn Văn A',
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
    refundDeadline: '2024-05-22',
    advanceAmount: 1000000,
    content: 'Tạm ứng mua văn phòng phẩm',
    attachedDocuments: [],
  },
  {
    id: 2,
    creator: 'Nguyễn Quang Toàn',
    requester: 'Lê Văn B',
    beneficiary: 'Nguyễn Quang Toàn',
    beneficiaryAccount: {
      accountNumber: '987654321',
      bank: 'Vietcombank',
      accountImage: '',
    },
    approver: 'Nguyễn Đình Thành',
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
    beneficiary: 'Nguyễn Quang E',
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
    refundDeadline: '2024-08-22',
    advanceAmount: 20000000,
    content: 'Tạm ứng chi phí hội nghị',
    attachedDocuments: [],
  },
]

const ManagerRefundContextProvider = observer(({ children } : IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [advancePerson, setAdvancePerson] = useState<AdvanceRefundModel[]>([]);


  const [itemUpdate, setItemUpdate] = useState<AdvanceRefundModel | null>(null);
  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
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
      addAdvancePerson,
      advancePerson,
      itemUpdate,
      setItemUpdate
     }}>
      {children}
    </ManagerRefundContext.Provider>
  );
});

const useManagerRefundContext = () => {
  return useContext(ManagerRefundContext);
};


export { ManagerRefundContextProvider, useManagerRefundContext };




