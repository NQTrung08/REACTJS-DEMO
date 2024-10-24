import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemAdvanceComplete } from "../../components/advance-refund/list-advance-refund/item/item-advance-complete";
import { TitleTableAdvanceComplete } from "../../components/advance-refund/list-advance-refund/title-table/title-table-advance-complete";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number;
}

export const ContainerCompleteAdvance = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  const renderTitle = () => (
    <TitleTableAdvanceComplete/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemAdvanceComplete key={index} item={item} tab={tab} />
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
