import { action, makeAutoObservable, observable } from "mobx";
import { ReactNode, createContext, useContext, useState } from "react";

class FilterStaff {
  @observable keyword: string = '';
  @observable status: 'not_collected' | 'overdue' | 'all' = 'all';
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

interface AdvanceRefundContextType {
  filter: FilterStaff;
}

export const AdvanceRefundContext = createContext<AdvanceRefundContextType>({
  filter: new FilterStaff(),
})

const AdvanceRefundContextProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterStaff>(new FilterStaff());
  return (
    <AdvanceRefundContext.Provider value={{ filter }}>
      {children}
    </AdvanceRefundContext.Provider>
  )
}

const useAdvanceRefundContext = () => {
  return useContext(AdvanceRefundContext);

}

export { AdvanceRefundContextProvider, useAdvanceRefundContext };
