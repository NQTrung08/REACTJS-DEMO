import classNames from "classnames";
import { useCreateAdvanceContext, useManagerRefundContext } from "core-modules";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { AdvanceRefundForm } from "./advance-refund-form";


const stepItems = [
  { number: 1, label: 'Lập phiếu' },
  { number: 2, label: 'Phê duyệt' },
  { number: 3, label: 'Chi tiền' },
  { number: 4, label: 'Hoàn thành' }
];

export const LayoutCreateRefund = observer(() => {
  const { formData } = useCreateAdvanceContext();
  const { isCreateOrUpdate } = useManagerRefundContext();

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
        {/* <Steps className="w-1/3" size="small" current={current} items={stepItems.map((item) => ({ title: item.title }))} />
         */}

        <div className="flex items-center justify-between w-[380px]">
          {stepItems.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex items-center gap-1">
                <div className="flex text-sm items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white font-medium">
                  {step.number}
                </div>
                <span className="text-sm font-medium text-gray-700">{step.label}</span>
              </div>
              {index < stepItems.length - 1 && (
                <div className="flex-1 h-0.5 bg-blue-600 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
      {/* form */}

      <AdvanceRefundForm />
    </div>
  )
})