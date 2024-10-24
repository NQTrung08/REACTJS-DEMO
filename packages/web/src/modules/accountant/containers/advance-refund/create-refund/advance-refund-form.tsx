import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Tabs } from "antd";
import { useCreateAdvanceContext, useManagerRefundContext } from "core-modules";
import { observer } from "mobx-react";
import { useState } from "react";
import DropdownStaff from "src/modules/accountant/components/advance-refund/create-advance.tsx/drop-down-staff";
import { ContentCreateAdvance } from "../../../components/advance-refund/create-advance.tsx/content-create-advance";

const items = [
  {
    key: '1',
    label: 'Nội dung',
    children: <ContentCreateAdvance />,
  },
  {
    key: '2',
    label: 'Tạm ứng chi tiết',
    children: '',
  },
  {
    key: '3',
    label: 'Tài liệu đi kèm',
    children: '',
  }
]

// Dữ liệu mẫu cho DropdownStaff
const staffOptions = [
  { name: 'Nguyen Van A', position: 'Manager' },
  { name: 'Tran Van B', position: 'Developer' },
  { name: 'Le Thi C', position: 'HR' },
];


export const AdvanceRefundForm = observer(() => {
  const { formData } = useCreateAdvanceContext();
  const { isCreateOrUpdate, handleCancel } = useManagerRefundContext();

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

  // Hàm chọn nhân viên
  const handleSelectRequester = (option: any) => {
    formData.requester = option.name; // Gán giá trị người đề nghị vào formData
  };


  return (
    <div>
      {/* Form fields */}
      < div className="grid grid-cols-3 gap-4 mb-4 text-gray-900 text-md p-3" >
        {/* Người tạo */}
        <div className="col-span-1 -ml-8" >
          <div className="flex gap-2">
            <label className="w-1/3 text-right">Người tạo:</label>
            <input
              type="text"
              value={formData.creator}
              onChange={(e) => formData.creator == e.target.value}
              className="border-b w-2/3 focus:outline-none focus:border-blue-500"
              readOnly
            />
          </div>

          <div className="flex gap-2">
            {/* Người đề nghị */}
            <label className="text-right w-1/3">Người đề nghị:</label>
            <div className="w-2/3">
              <DropdownStaff
                placeholder="Chọn người đề nghị"
                options={staffOptions}
                onSelect={handleSelectRequester}

              />
            </div>
          </div>
          {
            !formData.requester && (
              <span className="text-red-300 text-xs block text-right">Vui lòng chọn người đề nghị</span>
            )
          }

          {/* Phòng ban */}
          <div className="flex gap-2">
            <label className="w-1/3 text-right">Phòng ban:</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => formData.department == e.target.value}
              className="border-b w-2/3 focus:outline-none focus:border-blue-500"
              readOnly
            />
          </div>

          {/* Ngày tạo */}
          <div className="flex gap-2">
            <label className="text-gray-900 w-1/3 text-right">Ngày tạo:</label>
            <input
              type="date"
              value={formData.createAt}
              onChange={(e) => formData.createAt == e.target.value}
              className="w-2/3 border-b focus:outline-none focus:border-blue-500"
              readOnly
            />
          </div>

          <div className="flex gap-2">
            <label className="text-gray-900 text-right w-1/3">Ngày tạm ứng:</label>
            <input
              type="date"
              value={formData.requestDate}
              onChange={(e) => formData.requestDate == e.target.value}
              className={`w-2/3 border-b focus:outline-none focus:border-blue-500 ${formData.requestDate ? 'border-gray-300' : 'border-red-500'}`}
            />
          </div>

          {
            !formData.requestDate && (
              <span className="text-red-300 text-xs text-right block">Vui lòng chọn ngày tạm ứng</span>
            )
          }

          <div className="flex gap-2">
            <label className="text-gray-900 text-right w-1/3">Hạn hoàn:</label>
            <input
              type="date"
              value={formData.refundDeadline}
              onChange={(e) => formData.refundDeadline == e.target.value}
              className={`w-2/3 border-b focus:outline-none focus:border-blue-500 ${formData.refundDeadline ? 'border-gray-300' : 'border-red-500'}`}
            />
          </div>
          {
            !formData.refundDeadline && (
              <span className="text-red-300 text-xs text-right block">Vui lòng chọn hạn hoàn</span>
            )
          }
        </div >



        {/* Thụ hưởng */}
        < div className="col-span-1" >
          <label className="text-gray-900 block font-medium text-md">Thụ hưởng:</label>
          <input
            type="text"
            value={formData.beneficiary}
            onChange={(e) => formData.beneficiary == e.target.value}
            className={`w-full text-md border-b block focus:outline-none focus:border-blue-500 ${formData.beneficiary ? 'border-gray-300' : 'border-red-500'}`}
            placeholder="Nhập tên người thụ hưởng"
          />
          {
            !formData.beneficiary && (
              <span className="text-red-300 text-xs">Vui lòng nhập tên người thụ hưởng</span>
            )
          }
        </div >

        {/* Người phê duyệt */}
        < div className="col-span-1" >
          <label className="block text-gray-900 font-medium">Người phê duyệt:</label>
          <input
            type="text"
            value={formData.approver}
            onChange={(e) => formData.approver == e.target.value}
            className={`w-full block border-b focus:outline-none focus:border-blue-500 ${formData.approver ? 'border-gray-300' : 'border-red-500'}`}
            placeholder="Nhập tên người phê duyệt"
          />
          {
            !formData.approver && (
              <span className="text-red-300 text-xs">Vui lòng nhập tên người phê duyệt</span>
            )
          }
        </div >
      </div >

      {/* Content */}
      < div className="mb-4" >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarStyle={{ margin: 0 }} />
      </div >

      {/* Button Actions */}
      < div className="flex border-t justify-end gap-2 items-center text-md mt-16 px-3 py-2" >
        <button
          className="py-2 px-4 bg-gray-200 text-gray-700 rounded-sm hover:bg-gray-300"
        onClick={handleCancel}
        >
          Đóng lại
        </button>
        <div className="flex">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-600">
            <Icon path={mdiChevronRight} className="text-white w-4 h-4" />
            <span>
              Tiếp theo
            </span>
          </button>
          <button className="ml-[1px] px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-500">
            <Icon path={mdiChevronDown} className="text-white w-4 h-4" />
          </button>
        </div>
      </div >
    </div>
  );
});
