
import { mdiFilterOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { TAB_ADVANCE_REFUND } from 'core-params';
import { observer } from 'mobx-react';
import { SearchAdvanceRefund } from '../search-advance-refund';
import { AdvanceRefundSort } from '../sort-refund';
import { FilterDefaultTabNew } from './filter-default-tab-new';
import { StatusFilterAdvanceRefund } from './status-filter-refund';

interface IProps {
  tab: number
}

export const FilterAdvanced = observer(({
  tab
}: IProps) => {

  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <SearchAdvanceRefund placeholder='Tìm kiếm' />
        {/* Filter */}
        <div className='flex items-center'>
          <AdvanceRefundSort />
          <Icon path={mdiFilterOutline} className='ml-2 w-4 h-4' />
        </div>
      </div>
      {
        tab === TAB_ADVANCE_REFUND.OVERDUE ? (
          <StatusFilterAdvanceRefund tab={tab} />
        ) : tab === TAB_ADVANCE_REFUND.REFUND ? (
          <StatusFilterAdvanceRefund tab={tab} />
        ) : (
          <FilterDefaultTabNew />
        )
      }


    </div>

  )
})
