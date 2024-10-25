import { AdvanceRefundModel } from "core-model";
import { useListAdvanceRefundContext } from "core-modules";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemDueOverdue } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-due-overdue";
import { TitleTableOverDue } from "../../components/advance-refund/list-advance-refund/title-table/title-table-overdue";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";
import {SearchAdvanceRefund} from "./list-advance-refund/search-advance-refund";
import {Search} from "../../../../based/components/common/search";
import {AdvanceRefundSort} from "./list-advance-refund/sort-refund";
import Icon from "@mdi/react";
import {mdiFilterOutline} from "@mdi/js";
import {StatusFilter} from "../../../../based/components/common/status-filter";

interface IProps {
  tab: number,
  data: AdvanceRefundModel[]
}


type Filter = {
  keyword: string;
  status: string;
}
export const ContainerDueAndOverdue = observer(({
  tab,
  data
}: IProps) => {


  const [filter, setFilter] = useState<Filter>({
    keyword: "",
    status: "all"
  });

  const renderTitle = () => (
    <TitleTableOverDue />
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemDueOverdue key={index} item={item} tab={tab} />
  );

  const filteredData = data.filter((item) => item.beneficiary.toLowerCase().includes(filter.keyword.toLowerCase()));

  return (
    <>


      <div className='border-y p-2 flex justify-between items-center'>
        <div className="max-w-md w-full">
          <Search placeholder="Tìm kiếm" filter={{
            keyword: filter.keyword,
            setKeyword: (keyword) => setFilter({...filter, keyword})
          }}/>
        </div>
        {/* Filter */}
        <div className='flex items-center'>
          <AdvanceRefundSort/>
          <div onClick={() => {}}>
            <Icon path={mdiFilterOutline} className='ml-2 w-4 h-4'/>
          </div>
        </div>

        <StatusFilter title="Trạng thái:" filterOptions={[]} filter={filter} />
      </div>


      {/* Thêm bảng hiển thị dữ liệu */}
      <BaseList
        title='tạm ứng/hoàn ứng'
        renderTitle={renderTitle}
        renderItem={renderItem}
        data={filteredData}
      />
    </>
  );
});
