import { useCreateAdvanceContext } from "core-modules";
import { observer } from "mobx-react";

export const ContentCreateAdvance = observer(() => {
  const { formData } = useCreateAdvanceContext();
  return (
    <div className="p-3">
      <div className="flex gap-1 items-center">
        <label className="text-gray-900 w-24 text-md text-right">Số tiền (VND):</label>
        <input
          type="number"
          value={formData.advanceAmount}
          onChange={(e) => formData.advanceAmount = parseFloat(e.target.value)}
          className="border-b w-[331px] focus:outline-none"
        />
      </div>

      <div className="flex gap-1">
        <label className="text-gray-900 w-24 text-right">Nội dung:</label>
        <input
          type="text"
          value={formData.content}
          onChange={(e) => formData.content = e.target.value}
          className="border-b w-[331px] focus:outline-none"
          placeholder="Nhập nội dung"
        />
      </div>

    </div>
  )
})