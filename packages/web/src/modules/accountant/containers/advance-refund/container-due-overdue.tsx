import { AdvanceRefundModel } from "core-model";
import { useListAdvanceRefundContext } from "core-modules";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemDueOverdue } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-due-overdue";
import { TitleTableOverDue } from "../../components/advance-refund/list-advance-refund/title-table/title-table-overdue";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number
}

export const ContainerDueAndOverdue = observer(({
  tab
}: IProps) => {
  const { currentAdvanceRefund } = useListAdvanceRefundContext();
  const [filteredData, setFilteredData] = useState<AdvanceRefundModel[]>([]);

  // Lọc dữ liệu và render lại khi currentAdvanceRefund thay đổi
  useEffect(() => {
    const newFilteredData = currentAdvanceRefund.filter(
      (item: AdvanceRefundModel) => item.status !== 'completed'
    );
    setFilteredData(newFilteredData);
  }, [currentAdvanceRefund]); // Phụ thuộc vào currentAdvanceRefund để chạy lại khi dữ liệu thay đổi

  const renderTitle = () => (
    <TitleTableOverDue />
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemDueOverdue key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab} />
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