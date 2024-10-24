import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemRefund } from "../../components/advance-refund/list-advance-refund/item/item-refund";
import { TitleTableRefund } from "../../components/advance-refund/list-advance-refund/title-table/title-table-refund";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number
}

export const ContainerRefund = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;
  const renderTitle = () => (
    <TitleTableRefund/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemRefund key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab}/>
      {/* Thêm bảng hiển thị dữ liệu */}
      <BaseList
        renderTitle={renderTitle}
        renderItem={renderItem}
        data={items}
      />
    </>
  );
});