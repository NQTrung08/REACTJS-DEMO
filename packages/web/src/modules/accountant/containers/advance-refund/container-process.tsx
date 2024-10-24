import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemProcess } from "../../components/advance-refund/list-advance-refund/item/item-process";
import { TitleTableProcess } from "../../components/advance-refund/list-advance-refund/title-table/title-table-process";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number
}

export const ContainerProcess = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;
  const renderTitle = () => (
    <TitleTableProcess/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemProcess key={index} item={item} tab={tab} />
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