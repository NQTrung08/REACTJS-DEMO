import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundFormModel } from "../../../models";

interface CreateAdvanceContextType {
  formData: AdvanceRefundFormModel
  
}

export const CreateAdvanceContext = createContext<CreateAdvanceContextType>({
  formData: new AdvanceRefundFormModel()
})

interface IProps {
  children: ReactNode;
}

const CreateAdvanceProvider = observer(({ children }: IProps) => {
  const [formData, setFormData] = useState<AdvanceRefundFormModel>(new AdvanceRefundFormModel());

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

