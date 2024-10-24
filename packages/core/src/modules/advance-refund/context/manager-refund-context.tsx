import { observer } from "mobx-react-lite";
import { ReactNode, createContext, useContext, useState } from "react";


interface ManagerRefundContextType {
  isCreateOrUpdate: boolean;
  onCreateOrUpdate: (value: boolean) => void;
  handleCancel: () => void
}

export const ManagerRefundContext = createContext<ManagerRefundContextType>({
  isCreateOrUpdate: false,
  onCreateOrUpdate: () => { },
  handleCancel: () => { }
})


interface IProps {
  children: ReactNode
}

const ManagerRefundContextProvider = observer(({ children } : IProps) => {
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);

  const onCreateOrUpdate = (value: boolean) => {
    setIsCreateOrUpdate(value);
  };

  const handleCancel = () => {
    onCreateOrUpdate(false);
  };

  return (
    <ManagerRefundContext.Provider value={{ isCreateOrUpdate, onCreateOrUpdate,
      handleCancel
     }}>
      {children}
    </ManagerRefundContext.Provider>
  );
});

const useManagerRefundContext = () => {
  return useContext(ManagerRefundContext);
};


export { ManagerRefundContextProvider, useManagerRefundContext };




