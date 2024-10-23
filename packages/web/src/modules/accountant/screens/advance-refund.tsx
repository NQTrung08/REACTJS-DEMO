import { AdvanceRefundContextProvider } from "core-modules";
import { TabBar } from "../components/advance-refund/tab-bar";
import { HeaderAccountant } from "../components/header-accountant";
import { LayoutCreateRefund } from "../containers/layout-create-refund";

export const AdvanceRefundScreen = () => {
  return (
    <AdvanceRefundContextProvider>
      <div className="w-full">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' />
        <LayoutCreateRefund />
        <TabBar />
      </div>
    </AdvanceRefundContextProvider>
    
  )

}

