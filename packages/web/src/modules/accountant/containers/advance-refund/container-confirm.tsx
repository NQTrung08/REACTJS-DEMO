import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemConfirm } from "../../components/advance-refund/list-advance-refund/item/item-confirm";
import { TitleTableConfirm } from "../../components/advance-refund/list-advance-refund/title-table/title-table-confirm";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number;
}

export const ContainerConfirm = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  const renderTitle = () => (
    <TitleTableConfirm/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemConfirm key={index} item={item} tab={tab} />
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
