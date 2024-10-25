import React, {FC} from "react";
import {StepType, SubmitDataIF} from "../layout-create-refund";


export const AdvanceStep1: FC<StepType> = ({submitDataState}) => {

  const [submitData, setSubmitData] = submitDataState;


    return (
      <div>
        <input value={submitData.email} onChange={(e) => {setSubmitData({
          ...submitData,
          email: e.target.value
        })}}
          placeholder="Email"
        />
      </div>
    )
};
