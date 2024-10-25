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


interface IProps {
  children: ReactNode;
}

const ListAdvanceRefundProvider = observer(({ children }: IProps) => {
  const [filter, setFilter] = useState<FilterAdvanceRefund>(new FilterAdvanceRefund());
  const { advancePerson } = useManagerRefundContext();
  const [dataView, setDataView] = useState<AdvanceRefundModel[]>([]);

  useEffect(() => {
    let dataTemp: AdvanceRefundModel[] = advancePerson;
    if (filter.keyword) {
      dataTemp = dataTemp.filter((item) => {
        return item.beneficiary.toLowerCase().includes(filter.keyword.toLowerCase());
      });
    }

    if (filter.status !== 'all') {
      dataTemp = dataTemp.filter((item) => {
        return item.status === filter.status;
      });

    }

    if (filter.sort === 'date_asc') {
      dataTemp = dataTemp.sort((a, b) => {
        return new Date(a.createAt).getTime() - new Date(b.createAt).getTime();
      });

    } else if (filter.sort === 'date_desc') {
      dataTemp = dataTemp.sort((a, b) => {
        return new Date(b.createAt).getTime() - new Date(a.createAt).getTime();
      });
    }
    setDataView(dataTemp);
  }, [filter.keyword, filter.status, filter.sort, advancePerson]);

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;
  const totalPages = Math.ceil(dataView.length / perPage);
  const currentAdvanceRefund = dataView.slice(currentPage * perPage, (currentPage + 1) * perPage);

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
