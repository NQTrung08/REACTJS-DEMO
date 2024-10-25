import React, {FC} from "react";
import {StepType} from "../layout-create-refund";


export const AdvanceStep2: FC<StepType> = ({submitDataState}) => {

  const [submitData, setSubmitData] = submitDataState;


  return (
    <div>
      <input value={submitData.name} onChange={(e) => {
        setSubmitData({
          ...submitData,
          name: e.target.value
        })
      }}
             placeholder="Name"
      />

      <input value={submitData.password} onChange={(e) => {
        setSubmitData({
          ...submitData,
          password: e.target.value
        })
      }}
             placeholder="Password"
      />
    </div>
  )
};
