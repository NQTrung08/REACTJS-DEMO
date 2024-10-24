import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemAllAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-all-advance";
import { TitleTableAllAdvance } from "../../components/advance-refund/list-advance-refund/title-table/title-table-all-advance";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number;
}

export const ContainerAllAdvance = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  const renderTitle = () => (
    <TitleTableAllAdvance/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemAllAdvance key={index} item={item} tab={tab} />
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
