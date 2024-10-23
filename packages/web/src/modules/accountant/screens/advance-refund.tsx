import { CreateAdvanceProvider, ListAdvanceRefundProvider, ManagerRefundContextProvider } from "core-modules";
import { TabBar } from "../components/advance-refund/tab-bar";
import { HeaderAccountant } from "../components/header-accountant";
import { LayoutCreateRefund } from "../containers/advance-refund/create-refund/layout-create-refund";

export const AdvanceRefundScreen = () => {
  return (
    <ManagerRefundContextProvider>
      <div className="w-full">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' />
        <CreateAdvanceProvider>
          <LayoutCreateRefund />

        </CreateAdvanceProvider>
        <ListAdvanceRefundProvider>
          <TabBar />
        </ListAdvanceRefundProvider>
      </div>
    </ManagerRefundContextProvider>

  )

}

