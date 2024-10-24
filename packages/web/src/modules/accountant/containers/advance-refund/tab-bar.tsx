import { Tabs } from 'antd';
import classNames from 'classnames';
import { TAB_ADVANCE_REFUND } from 'core-params';
import { observer } from "mobx-react";
import { useState } from 'react';
import { ListAllAdvance } from './list-advance-refund/list-all-advance';
import { ListDueAndOverdue } from './list-advance-refund/list-due-overdue';
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
      case TAB_ADVANCE_REFUND.REFUND:
        return <ListDueAndOverdue tab={key}/>
      case TAB_ADVANCE_REFUND.NEW:
      case TAB_ADVANCE_REFUND.PROCESSING:
      case TAB_ADVANCE_REFUND.CONFIRM:
      case TAB_ADVANCE_REFUND.REJECT:
      case TAB_ADVANCE_REFUND.COMPLETE:
      case TAB_ADVANCE_REFUND.ALL:
        return <ListAllAdvance tab={key}/>
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
            <div className="flex flex-col h-full w-full">
              {renderTab(Number(item.key))}
            </div>
          </Tabs.TabPane>
        )}
      </Tabs>
    </div>
  )

});

export { TabBar };
