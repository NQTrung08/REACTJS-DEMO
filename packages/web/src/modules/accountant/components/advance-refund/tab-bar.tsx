import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';
import { AllAdvance } from '../../screens/all-advance';
import { ConfirmAdvance } from '../../screens/confirm-advance';
import { Confirmed } from '../../screens/confirmed';
import { DueAndOverdueScreen } from '../../screens/due-overdue';
import { NewAdvanceScreen } from '../../screens/new-advance';
import { Processing } from '../../screens/processing';
import { Refund } from '../../screens/refund';
import { Reject } from '../../screens/reject';

export const TabBar: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Sắp đến hạn và quá hạn hoàn ứng',
      children: <DueAndOverdueScreen />,
    },
    {
      key: '2',
      label: 'Tạm ứng mới',
      children: <NewAdvanceScreen />,
    },
    {
      key: '3',
      label: 'Đang phê duyệt',
      children: <Processing />,
    },
    {
      key: '4',
      label: 'Đồng ý thanh toán',
      children: <Confirmed />,
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
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='' />
  );
};


