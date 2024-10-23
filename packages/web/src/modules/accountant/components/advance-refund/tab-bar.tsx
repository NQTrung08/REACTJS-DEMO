import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { observer } from "mobx-react";
import React from 'react';
import { AllAdvance } from '../../containers/list-advance-refund/all-advance';
import { CompleteAdvance } from '../../containers/list-advance-refund/complete-advance';
import { ConfirmAdvance } from '../../containers/list-advance-refund/confirm-advance';
import { DueAndOverdue } from '../../containers/list-advance-refund/due-overdue';
import { NewAdvance } from '../../containers/list-advance-refund/new-advance';
import { Processing } from '../../containers/list-advance-refund/processing';
import { Refund } from '../../containers/list-advance-refund/refund';
import { Reject } from '../../containers/list-advance-refund/reject';

const TabBar: React.FC = observer(() => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Sắp đến hạn và quá hạn hoàn ứng',
      children: <DueAndOverdue />,
    },
    {
      key: '2',
      label: 'Tạm ứng mới',
      children: <NewAdvance />,
    },
    {
      key: '3',
      label: 'Đang phê duyệt',
      children: <Processing />,
    },
    {
      key: '4',
      label: 'Đồng ý thanh toán',
      children: <CompleteAdvance />,
    },
    {
      key: '5',
      label: 'Từ chối',
      children: <Reject />,
    },
    {
      key: '6',
      label: 'Tạm ứng hoàn thành',
      children: <ConfirmAdvance />,
    },
    {
      key: '7',
      label: 'Tất cả tạm ứng',
      children: <AllAdvance />,
    },
    {
      key: '8',
      label: 'Hoàn ứng',
      children: <Refund />,
    },
  ];

  const onChange = (key: string) => {
    console.log('Active Tab:', key);
  };

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarStyle={{ margin: 0 }} />
  );
});

export { TabBar };
