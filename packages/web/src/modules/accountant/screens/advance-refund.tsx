import {CreateAdvanceProvider, ListAdvanceRefundProvider, ManagerRefundContextProvider} from "core-modules";
import { observer } from "mobx-react";
import { HeaderAccountant } from "../components/header-accountant";
import { LayoutCreateRefund } from "../containers/advance-refund/create-refund/layout-create-refund";
import { TabBar } from "../containers/advance-refund/tab-bar";
import {useState} from "react";

export const AdvanceRefundScreen = observer(() => {

  const state = useState(false);
  const [isOpen, _] = state;

  return (
    <ManagerRefundContextProvider>
      <div className="w-full h-full overflow-y-auto relative">
        <HeaderAccountant title='Tạm ứng/hoàn ứng' openState={state} />
        <CreateAdvanceProvider>
          <LayoutCreateRefund openState={state} />
        </CreateAdvanceProvider>
        <ListAdvanceRefundProvider>
          <TabBar />
        </ListAdvanceRefundProvider>
      </div>
    </ManagerRefundContextProvider>

  )

})

