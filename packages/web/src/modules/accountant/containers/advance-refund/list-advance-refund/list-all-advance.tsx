import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemAllAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-all-advance";
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table";
import { FilterAdvanced } from "./filter-default/filter-advanced";
import { ToolBarRefund } from "./toolbar-refund";

interface IProps {
  tab: number;
}

export const ListAllAdvance = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  const renderTitle = () => (
    <TitleTable tab={tab} />
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemAllAdvance key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab}/>
      <ToolBarRefund />

      <BaseList
        renderTitle={renderTitle}
        renderItem={renderItem}
        items={items}
      />
    </>
  );
});
