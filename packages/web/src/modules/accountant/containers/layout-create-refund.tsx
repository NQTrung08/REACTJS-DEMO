import { Steps } from "antd";
import classNames from "classnames";
import { useAdvanceRefundContext, useCreateAdvanceContext } from "core-modules";
import { useState } from "react";
import { AdvanceRefundForm } from "./create-refund/advance-refund-form";


const stepItems = [
  {
    title: "Lập phiếu",
    content: "Content for Step 1",
  },
  {
    title: "Phê duyệt",
    content: "Content for Step 2",
  },
  {
    title: "Chi tiền",
    content: "Content for Step 3",
  },
  {
    title: "Hoàn thành",
    content: "Content for Step 4",
  },
];

export const LayoutCreateRefund = () => {
  const { formData } = useCreateAdvanceContext();
  const { isCreateOrUpdate } = useAdvanceRefundContext();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (key: string) => {
    console.log('Active Tab:', key);
  };

  return (

    <div className={classNames("bg-white border border-gray-200 shadow-md", {
      "block": isCreateOrUpdate,
      "hidden": !isCreateOrUpdate
    })} id="create-advance">
      {/* Header form */}
      <div className="flex justify-between items-center py-8 px-3 border-b border-dashed">
        <span className="text-gray-900 font-medium text-llg">#TU202402070001</span>
        <span className="text-xl font-semibold">TẠM ỨNG</span>
        {/* Steps */}
        <Steps className="w-1/3 " size="small" current={current} items={stepItems.map((item) => ({ title: item.title }))} />
      </div>
      {/* form */}
      <AdvanceRefundForm />
    </div>
  )
}