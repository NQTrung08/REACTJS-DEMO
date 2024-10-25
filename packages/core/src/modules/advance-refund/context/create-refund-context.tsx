import { observer } from "mobx-react";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AdvanceRefundModel } from "../../../models";
import { useManagerRefundContext } from "./manager-refund-context";

interface CreateAdvanceContextType {
  formData: AdvanceRefundModel,
  handleSubmit: () => void,
  handleCancel: () => void

}

export const CreateAdvanceContext = createContext<CreateAdvanceContextType>({
  formData: new AdvanceRefundModel(),
  handleSubmit: () => { },
  handleCancel: () => { }
})

interface IProps {
  children: ReactNode;
}

const CreateAdvanceProvider = observer(({ children }: IProps) => {
  const [formData, setFormData] = useState<AdvanceRefundModel>(new AdvanceRefundModel());
  const { addAdvancePerson, itemUpdate, onCreateOrUpdate } = useManagerRefundContext();

  useEffect(() => {
    if (itemUpdate) {
      // Nếu có itemUpdate, cập nhật formData từ itemUpdate
      formData.setAll(itemUpdate);
   } else {
     resetFormData();
   }
  }, [itemUpdate, formData]);


  const resetFormData = () => {
    // TODO: Khoi tao formData voi cac giatri mac dinh
    formData.setAll({
      advanceAmount: 0,
      content: '',
      requester: '',
      approver: '',
      beneficiary: '',
      requestDate: '',
      refundDeadline: '',
    })
  }

  const handleCancel = () => {
    resetFormData();
    onCreateOrUpdate(false);
  }
  
  const handleSubmit = () => {
    console.log('CreateAdvanceProvider', formData);
    addAdvancePerson(formData);
  }
  return (
    <CreateAdvanceContext.Provider value={{
      formData,
      handleSubmit,
      handleCancel
    }}>
      {children}
    </CreateAdvanceContext.Provider>
  )
})

const useCreateAdvanceContext = () => {
  return useContext(CreateAdvanceContext);

}

export { CreateAdvanceProvider, useCreateAdvanceContext };

