import { AdvanceRefundContextProvider } from "core-modules";
import { TabBar } from "../components/advance-refund/tab-bar";
import { HeaderAccountant } from "../components/header-accountant";
import { AdvanceRefundForm } from "../containers/advance-refund-form";

export const AdvanceRefundScreen = () => {
  return (
    <AdvanceRefundContextProvider>
      <div className="w-full">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' />
        <AdvanceRefundForm />
        <TabBar />
      </div>
    </AdvanceRefundContextProvider>
    
  )

}

