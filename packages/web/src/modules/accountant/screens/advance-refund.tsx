import { CreateAdvanceProvider, ManagerRefundContextProvider } from "core-modules";
import { HeaderAccountant } from "../components/header-accountant";
import { LayoutCreateRefund } from "../containers/advance-refund/create-refund/layout-create-refund";
import { TabBar } from "../containers/advance-refund/tab-bar";

export const AdvanceRefundScreen = () => {
  return (
    <ManagerRefundContextProvider>
      <div className="w-full">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' />
        <CreateAdvanceProvider>
          <LayoutCreateRefund />

        </CreateAdvanceProvider>
        
          <TabBar />
        
      </div>
    </ManagerRefundContextProvider>

  )

}

