import { TabBar } from "../components/advance-refund/tab-bar";
import { HeaderAccountant } from "../components/header-accountant";

export const AdvanceRefundScreen = () => {
  return (
    <div className="w-full">
      <HeaderAccountant title='Tạm ứng/hoàn ứng' />

      <TabBar />

    </div>
  )

}

