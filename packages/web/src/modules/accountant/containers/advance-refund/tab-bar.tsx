import { Tabs } from 'antd';
import classNames from 'classnames';
import {ListAdvanceRefundProvider, useListAdvanceRefundContext} from 'core-modules';
import { TAB_ADVANCE_REFUND } from 'core-params';
import { observer } from "mobx-react";
import { useState } from 'react';
import { ContainerAllAdvance } from './container-all-advance';
import { ContainerCompleteAdvance } from './container-complete-advance';
import { ContainerConfirm } from './container-confirm';
import { ContainerDueAndOverdue } from './container-due-overdue';
import { ContainerNewAdvance } from './container-new-advance';
import { ContainerProcess } from './container-process';
import { ContainerRefund } from './container-refund';
import { ContainerReject } from './container-reject';
import {AdvanceRefundModel} from "core-model";
const TabBar = observer(() => {

  const { currentAdvanceRefund } = useListAdvanceRefundContext();

  console.log("11111", currentAdvanceRefund);

  const DATA_TABS = [
    {
      key: TAB_ADVANCE_REFUND.OVERDUE,
      label: 'Sắp đến hạn và quá hạn hoàn ứng',
      component: ContainerDueAndOverdue,
      conditional: (item: AdvanceRefundModel) => true
    },
    // {
    //   key: TAB_ADVANCE_REFUND.NEW,
    //   label: 'Tạm ứng mới',
    //   component: ContainerNewAdvance
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.PROCESSING,
    //   label: 'Đang phê duyệt',
    //   component: ContainerProcess
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.CONFIRM,
    //   label: 'Đồng ý thanh toán',
    //   component: ContainerConfirm
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.REJECT,
    //   label: 'Từ chối',
    //   component: ContainerReject
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.COMPLETE,
    //   label: 'Tạm ứng hoàn thành',
    //   component: ContainerCompleteAdvance
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.ALL,
    //   label: 'Tất cả tạm ứng',
    //   component: ContainerAllAdvance
    // },
    // {
    //   key: TAB_ADVANCE_REFUND.REFUND,
    //   label: 'Hoàn ứng',
    //   component: ContainerRefund
    // },
  ];

  const [tabActive, setTabActive] = useState(1);

  const selectedTab = DATA_TABS.find(t => t.key === tabActive) as any;
  const Component = selectedTab?.component as any;
  const filteredData =  currentAdvanceRefund.filter((item) => selectedTab.conditional(item));

  return (
    <div>
      <Tabs
        hideAdd
        tabBarStyle={{ marginBottom: 0, paddingInline: 0, paddingBottom: 0, height: 36 }}
        onChange={(index) => setTabActive(Number(index))}
        tabBarGutter={0}
        activeKey={String(tabActive)}
      >
        {DATA_TABS.map((item, index) =>
          <Tabs.TabPane
            tab={
              <div className={classNames('flex flex-row items-center space-x-1 px-4 ', { "border-b-1 rounded border-blue-600": tabActive === Number(item.key) })}>
                <span className={classNames('font-normal', { "text-blue-600": tabActive === Number(item.key) })}>{item.label}</span>
              </div>
            }
            key={Number(item.key)}
          >
            <div className="flex flex-col h-screen w-full">
              <ListAdvanceRefundProvider>
                <Component tab={item.key} data={filteredData}/>
              </ListAdvanceRefundProvider>
            </div>
          </Tabs.TabPane>
        )}
      </Tabs>
    </div>
  )

});

export { TabBar };
