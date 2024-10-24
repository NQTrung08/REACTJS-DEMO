import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemReject } from "../../components/advance-refund/list-advance-refund/item/item-reject";
import { TitleTableReject } from "../../components/advance-refund/list-advance-refund/title-table/title-table-reject";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number;
}

export const ContainerReject = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  const renderTitle = () => (
    <TitleTableReject/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemReject key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab}/>
      <BaseList
        renderTitle={renderTitle}
        renderItem={renderItem}
        data={items}
      />
    </>
  );
});
