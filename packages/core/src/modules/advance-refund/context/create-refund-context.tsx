import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useState } from "react";
import { AdvanceRefundModel } from "../../../models";
import { useManagerRefundContext } from "./manager-refund-context";

interface CreateAdvanceContextType {
  formData: AdvanceRefundModel,
  handleSubmit: () => void

}

export const CreateAdvanceContext = createContext<CreateAdvanceContextType>({
  formData: new AdvanceRefundModel(),
  handleSubmit: () => { },
})

interface IProps {
  children: ReactNode;
}

const CreateAdvanceProvider = observer(({ children }: IProps) => {
  const [formData, setFormData] = useState<AdvanceRefundModel>(new AdvanceRefundModel());
  const { addAdvancePerson } = useManagerRefundContext();

  const handleSubmit = () => {
    console.log('CreateAdvanceProvider', formData);
    addAdvancePerson(formData);
  }
  return (
    <CreateAdvanceContext.Provider value={{
      formData,
      handleSubmit
    }}>
      {children}
    </CreateAdvanceContext.Provider>
  )
})

const useCreateAdvanceContext = () => {
  return useContext(CreateAdvanceContext);

}

export { CreateAdvanceProvider, useCreateAdvanceContext };

