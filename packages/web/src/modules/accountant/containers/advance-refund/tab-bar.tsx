import { Tabs } from 'antd';
import classNames from 'classnames';
import { ListAdvanceRefundProvider } from 'core-modules';
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
const TabBar = observer(() => {
  const dataTabs = [
    {
      key: TAB_ADVANCE_REFUND.OVERDUE,
      label: 'Sắp đến hạn và quá hạn hoàn ứng',
    },
    {
      key: TAB_ADVANCE_REFUND.NEW,
      label: 'Tạm ứng mới',
    },
    {
      key: TAB_ADVANCE_REFUND.PROCESSING,
      label: 'Đang phê duyệt',
    },
    {
      key: TAB_ADVANCE_REFUND.CONFIRM,
      label: 'Đồng ý thanh toán',
    },
    {
      key: TAB_ADVANCE_REFUND.REJECT,
      label: 'Từ chối',
    },
    {
      key: TAB_ADVANCE_REFUND.COMPLETE,
      label: 'Tạm ứng hoàn thành',
    },
    {
      key: TAB_ADVANCE_REFUND.ALL,
      label: 'Tất cả tạm ứng',
    },
    {
      key: TAB_ADVANCE_REFUND.REFUND,
      label: 'Hoàn ứng',
    },
  ];

  const [tabActive, setTabActive] = useState(1);

  const renderTab = (key: number) => {
    switch (key) {
      case TAB_ADVANCE_REFUND.OVERDUE:
        return <ContainerDueAndOverdue tab={key} />
      case TAB_ADVANCE_REFUND.REFUND:
        return <ContainerRefund tab={key} />
      case TAB_ADVANCE_REFUND.NEW:
        return <ContainerNewAdvance tab={key} />
      case TAB_ADVANCE_REFUND.PROCESSING:
        return <ContainerProcess tab={key} />
      case TAB_ADVANCE_REFUND.CONFIRM:
        return <ContainerConfirm tab={key} />
      case TAB_ADVANCE_REFUND.REJECT:
        return <ContainerReject tab={key} />
      case TAB_ADVANCE_REFUND.COMPLETE:
        return <ContainerCompleteAdvance tab={key} />
      case TAB_ADVANCE_REFUND.ALL:
        return <ContainerAllAdvance tab={key} />
      default:
        return null
    }
  }

  return (
    <div>
      <Tabs
        hideAdd
        tabBarStyle={{ marginBottom: 0, paddingInline: 0, paddingBottom: 0, height: 36 }}
        onChange={(index) => setTabActive(Number(index))}
        tabBarGutter={0}
        activeKey={String(tabActive)}
      >
        {dataTabs.map((item, index) =>
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
                  {renderTab(Number(item.key))}
              </ListAdvanceRefundProvider>
            </div>
          </Tabs.TabPane>
        )}
      </Tabs>
    </div>
  )

});

export { TabBar };
