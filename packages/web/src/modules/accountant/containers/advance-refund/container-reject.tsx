import { AdvanceRefundModel } from "core-model";
import { ListAdvanceRefundProvider, useListAdvanceRefundContext } from "core-modules";
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
  

  const { currentAdvanceRefund } = useListAdvanceRefundContext();

  const renderTitle = () => (
    <TitleTableReject />
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemReject key={index} item={item} tab={tab} />
  );

  return (
    <>
      <ListAdvanceRefundProvider>

        <FilterAdvanced tab={tab} />
        {/* Thêm bảng hiển thị dữ liệu */}
        <BaseList
          title='tạm ứng/hoàn ứng'
          renderTitle={renderTitle}
          renderItem={renderItem}
          data={currentAdvanceRefund}
        />
      </ListAdvanceRefundProvider>
    </>
  );
});
