import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundModel } from "../../../models";

interface CreateAdvanceContextType {
  formData: AdvanceRefundModel
  
}

export const CreateAdvanceContext = createContext<CreateAdvanceContextType>({
  formData: new AdvanceRefundModel()
})

interface IProps {
  children: ReactNode;
}

const CreateAdvanceProvider = observer(({ children }: IProps) => {
  const [formData, setFormData] = useState<AdvanceRefundModel>(new AdvanceRefundModel());

  return (
    <CreateAdvanceContext.Provider value={{ formData }}>
      {children}
    </CreateAdvanceContext.Provider>
  )
})

const useCreateAdvanceContext = () => {
  return useContext(CreateAdvanceContext);
  
}

export { CreateAdvanceProvider, useCreateAdvanceContext };

