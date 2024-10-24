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

const ManagerRefundContextProvider = observer(({ children } : IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);
  const [advancePerson, setAdvancePerson] = useState<AdvanceRefundModel[]>([]);
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




