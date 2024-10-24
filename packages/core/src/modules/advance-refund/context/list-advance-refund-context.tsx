import { action, makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AdvanceRefundModel } from "../../../models";
import { useManagerRefundContext } from "./manager-refund-context";

class FilterAdvanceRefund {
  @observable keyword: string = '';
  @observable status: 'not_collected' | 'overdue' | 'completed' | 'all' = 'all';
  @observable sort: 'date_asc' | 'date_desc' = 'date_asc';

  constructor() {
    makeAutoObservable(this);
  }
  @action
  setStatus(status: string) {
    if (['not_collected', 'overdue', 'all'].includes(status)) {
      this.status = status as 'not_collected' | 'overdue' | 'all'; // Chuyển đổi kiểu
    }
  }

  // Thay đổi từ khóa tìm kiếm
  @action
  setKeyword(keyword: string) {
    this.keyword = keyword;
  }

  // Thay đổi kiểu sắp xếp
  @action
  setSort(sort: string) {
    if (sort === 'date_asc' || sort === 'date_desc') {
      this.sort = sort as 'date_asc' | 'date_desc'; // Chuyển đổi kiểu
    }
  }

}

interface ListAdvanceRefundContextType {
  filter: FilterAdvanceRefund;
  dataView: AdvanceRefundModel[];
  currentAdvanceRefund: AdvanceRefundModel[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;

}

export const ListAdvanceRefundContext = createContext<ListAdvanceRefundContextType>({
  filter: new FilterAdvanceRefund(),
  dataView: [],
  currentAdvanceRefund: [],
  currentPage: 0,
  perPage: 0,
  totalPages: 0,
  handleNextPage: () => { },
  handlePreviousPage: () => { },

})
interface IProps {
  children: ReactNode;
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
]

interface IProps {
  children: ReactNode;
}

const ListAdvanceRefundProvider = observer(({ children }: IProps) => {
  const [filter, setFilter] = useState<FilterAdvanceRefund>(new FilterAdvanceRefund());
  const { advancePerson } = useManagerRefundContext();
  const [dataView, setDataView] = useState<AdvanceRefundModel[]>([]);

  useEffect(() => {
    let dataTemp: AdvanceRefundModel[] = advancePerson;
    console.log('advancePerson', advancePerson);
    setDataView(dataTemp);
  }, [advancePerson]);

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;
  const totalPages = Math.ceil(dataView.length / perPage);
  const currentAdvanceRefund = dataView.slice(currentPage * perPage, (currentPage + 1) * perPage);

  console.log('currentAdvanceRefund', currentAdvanceRefund);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };




  return (
    <ListAdvanceRefundContext.Provider value={{
      filter, dataView,
      currentAdvanceRefund, currentPage, perPage, totalPages,
      handleNextPage, handlePreviousPage,
    }}>
      {children}
    </ListAdvanceRefundContext.Provider>
  )
})

const useListAdvanceRefundContext = () => {
  return useContext(ListAdvanceRefundContext);
};

export { ListAdvanceRefundProvider, useListAdvanceRefundContext };
