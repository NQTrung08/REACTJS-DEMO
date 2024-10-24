import { CreateAdvanceProvider, ManagerRefundContextProvider } from "core-modules";
import { observer } from "mobx-react";
import { HeaderAccountant } from "../components/header-accountant";
import { LayoutCreateRefund } from "../containers/advance-refund/create-refund/layout-create-refund";
import { TabBar } from "../containers/advance-refund/tab-bar";

export const AdvanceRefundScreen = observer(() => {
  return (
    <ManagerRefundContextProvider>
      <div className="w-full h-full overflow-y-auto">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' />
        <CreateAdvanceProvider>
          <LayoutCreateRefund />
        </CreateAdvanceProvider>
        <TabBar />
      </div>
    </ManagerRefundContextProvider>

  )

})

