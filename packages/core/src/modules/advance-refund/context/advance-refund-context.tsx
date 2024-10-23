import { action, makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundFormModel } from "../../../models";

class FilterStaff {
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

interface AdvanceRefundContextType {
  advancePerson: AdvanceRefundFormModel[];
  filter: FilterStaff;
  isCreateOrUpdate: boolean;
  onCreateOrUpdate: (value: boolean) => void
}

export const AdvanceRefundContext = createContext<AdvanceRefundContextType>({
  advancePerson: [],
  filter: new FilterStaff(),
  isCreateOrUpdate: false,
  onCreateOrUpdate: () => { }
})
interface IProps {
  children: ReactNode;
}


const AdvanceRefundContextProvider: React.FC<IProps> = observer(({ children }) => {
  const [filter, setFilter] = useState<FilterStaff>(new FilterStaff());
  const [advancePerson, setAdvancePerson] = useState<AdvanceRefundFormModel[]>([]);
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };
  return (
    <AdvanceRefundContext.Provider value={{ filter, advancePerson, isCreateOrUpdate, onCreateOrUpdate }}>
      {children}
    </AdvanceRefundContext.Provider>
  )
})

const useAdvanceRefundContext = () => {
  return useContext(AdvanceRefundContext);
};

export { AdvanceRefundContextProvider, useAdvanceRefundContext };
