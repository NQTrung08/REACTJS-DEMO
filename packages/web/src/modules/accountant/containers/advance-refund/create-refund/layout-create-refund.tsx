import classNames from "classnames";
import {useCreateAdvanceContext, useManagerRefundContext} from "core-modules";
import {observer} from "mobx-react";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {AdvanceRefundForm} from "./advance-refund-form";
import {AdvanceStep1} from "./steps/advance-step-1";
import {AdvanceStep2} from "./steps/advance-step-2";
import Icon from "@mdi/react";
import {mdiChevronDown, mdiChevronRight} from "@mdi/js";


const stepItems = [
  {number: 1, label: 'Lập phiếu'},
  {number: 2, label: 'Phê duyệt'},
  {number: 3, label: 'Chi tiền'},
  {number: 4, label: 'Hoàn thành'}
];


export interface SubmitDataIF {email: string, password: string, name: string};

export type StepType = {
  submitDataState:  [SubmitDataIF, React.Dispatch<React.SetStateAction<SubmitDataIF>>];
}

export const LayoutCreateRefund = observer(({openState}: {openState: [boolean, Dispatch<SetStateAction<boolean>>]}) => {
    const {formData, handleSubmit} = useCreateAdvanceContext();
    const {isCreateOrUpdate} = useManagerRefundContext();


    const [current, setCurrent] = useState(0);
    const [step, setStep] = useState(0);

    const [isOpen, setIsOpen] = openState;

    const submitDataState = useState<SubmitDataIF>({
      email: "",
      password: "",
      name: ""
    });

    const STEPS = [
      AdvanceRefundForm,
    ];


    const Step = STEPS[step];


    return isOpen ? (
      <div className={classNames("bg-white border border-gray-200 shadow-md block")} id="create-or-update">
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
                  <div
                    className="flex text-sm items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white font-medium">
                    {step.number}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{step.label}</span>
                </div>
                {index < stepItems.length - 1 && (
                  <div className="flex-1 h-0.5 bg-blue-600 mx-2"/>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>


        <Step
          submitDataState={submitDataState}
        />

        <div className="flex border-t justify-end gap-2 items-center text-md mt-16 px-3 py-2">
          <button
            className="py-2 px-4 text-gray-700 rounded-sm hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Đóng lại
          </button>
          <div className="flex">
            <button
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-sm focus:outline-none"
              onClick={handleSubmit}>
              <Icon path={mdiChevronRight} className="text-white w-4 h-4"/>
              <span>
              Thêm mới
            </span>
            </button>
            <button className="ml-[1px] px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-500">
              <Icon path={mdiChevronDown} className="text-white w-4 h-4"/>
            </button>
          </div>
        </div>



      </div>
    ) : null
  }
);

