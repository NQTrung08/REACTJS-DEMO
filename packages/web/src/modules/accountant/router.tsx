import { observer } from 'mobx-react';
import { Route, Routes } from "react-router-dom";
import { AccountantScreen } from './screens/accountant';
import { AdvanceRefundScreen } from './screens/advance-refund';
export const AccountantRoutes = observer(() => {
  return (
    <Routes>
      <Route path="/" element={<AccountantScreen />}>
        <Route path="advance-refund" element={<AdvanceRefundScreen />} />
      </Route>
    </Routes>
  );
});
