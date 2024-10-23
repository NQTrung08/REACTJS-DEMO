import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { observer } from "mobx-react";
import React from 'react';
import { ListAllAdvance } from '../../containers/advance-refund/list-advance-refund/list-all-advance';
import { ListCompleteAdvance } from '../../containers/advance-refund/list-advance-refund/list-complete-advance';
import { ListConfirmAdvance } from '../../containers/advance-refund/list-advance-refund/list-confirm-advance';
import { ListDueAndOverdue } from '../../containers/advance-refund/list-advance-refund/list-due-overdue';
import { ListNewAdvance } from '../../containers/advance-refund/list-advance-refund/list-new-advance';
import { ListProcessing } from '../../containers/advance-refund/list-advance-refund/list-processing';
import { ListRefund } from '../../containers/advance-refund/list-advance-refund/list-refund';
import { ListReject } from '../../containers/advance-refund/list-advance-refund/list-reject';

const TabBar: React.FC = observer(() => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Sắp đến hạn và quá hạn hoàn ứng',
      children: <ListDueAndOverdue />,
    },
    {
      key: '2',
      label: 'Tạm ứng mới',
      children: <ListNewAdvance />,
    },
    {
      key: '3',
      label: 'Đang phê duyệt',
      children: <ListProcessing />,
    },
    {
      key: '4',
      label: 'Đồng ý thanh toán',
      children: <ListConfirmAdvance />,
    },
    {
      key: '5',
      label: 'Từ chối',
      children: <ListReject />,
    },
    {
      key: '6',
      label: 'Tạm ứng hoàn thành',
      children: <ListCompleteAdvance />,
    },
    {
      key: '7',
      label: 'Tất cả tạm ứng',
      children: <ListAllAdvance />,
    },
    {
      key: '8',
      label: 'Hoàn ứng',
      children: <ListRefund />,
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
