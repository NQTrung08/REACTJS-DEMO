import { Tabs } from "antd";
import { useCreateAdvanceContext } from "core-modules";
import { observer } from "mobx-react";
import { ContentCreateAdvance } from "../components/advance-refund/create-advance.tsx/content-create-advance";

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


export const AdvanceRefundForm = observer(() => {
  const { formData } = useCreateAdvanceContext();

  const onChange = (key: string) => {
    console.log('Active Tab:', key);
  };


  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500">#TU202402070001</span>
        <span className="text-lg font-bold">TẠM ỨNG</span>
        {/* Steps */}
        <div className="">
          <div className="flex items-center space-x-4">
            <span className="text-blue-500">1. Lập phiếu</span>
            <span className="text-gray-400">➔</span>
            <span>2. Phê duyệt</span>
            <span className="text-gray-400">➔</span>
            <span>3. Chi tiền</span>
            <span className="text-gray-400">➔</span>
            <span>4. Hoàn thành</span>
          </div>
        </div>
      </div>



      {/* Form fields */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Người tạo */}
        <div className="col-span-1">
          <label className="block text-gray-700">Người tạo:</label>
          <input
            type="text"
            value={formData.creator}
            onChange={(e) => formData.creator == e.target.value}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            readOnly
          />

          {/* Người đề nghị */}
          <div className="col-span-1">
            <label className="block text-gray-700">Người đề nghị:</label>
            <input
              type="text"
              value={formData.requester}
              onChange={(e) => formData.requester == e.target.value}
              className={`w-full px-3 py-2 mt-1 border ${formData.requester ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              placeholder="Chọn người đề nghị"
            />
            {!formData.requester && (
              <span className="text-red-500 text-sm">Vui lòng chọn người đề nghị</span>
            )}
          </div>


          {/* Phòng ban */}
          <div className="col-span-1">
            <label className="block text-gray-700">Phòng ban:</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => formData.department == e.target.value}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              readOnly
            />
          </div>

          <label className="block text-gray-700">Ngày tạo:</label>
          <input
            type="date"
            value={formData.createAt}
            onChange={(e) => formData.createAt == e.target.value}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            readOnly
          />

          <div className="col-span-1">
            <label className="block text-gray-700">Ngày tạm ứng:</label>
            <input
              type="date"
              value={formData.requestDate}
              onChange={(e) => formData.requestDate == e.target.value}
              className={`w-full px-3 py-2 mt-1 border ${formData.requestDate ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {!formData.requestDate && (
              <span className="text-red-500 text-sm">Vui lòng chọn ngày tạm ứng</span>
            )}
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700">Hạn hoàn:</label>
            <input
              type="date"
              value={formData.refundDeadline}
              onChange={(e) => formData.refundDeadline == e.target.value}
              className={`w-full px-3 py-2 mt-1 border ${formData.refundDeadline ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {!formData.refundDeadline && (
              <span className="text-red-500 text-sm">Vui lòng chọn hạn hoàn</span>
            )}
          </div>
        </div>



        {/* Thụ hưởng */}
        <div className="col-span-1">
          <label className="block text-gray-700">Thụ hưởng:</label>
          <input
            type="text"
            value={formData.beneficiary}
            onChange={(e) => formData.beneficiary == e.target.value}
            className={`w-full px-3 py-2 mt-1 border ${formData.beneficiary ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            placeholder="Nhập tên người thụ hưởng"
          />
          {!formData.beneficiary && (
            <span className="text-red-500 text-sm">Vui lòng nhập tên người thụ hưởng</span>
          )}
        </div>

        {/* Người phê duyệt */}
        <div className="col-span-1">
          <label className="block text-gray-700">Người phê duyệt:</label>
          <input
            type="text"
            value={formData.approver}
            onChange={(e) => formData.approver == e.target.value}
            className={`w-full px-3 py-2 mt-1 border ${formData.approver ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            placeholder="Nhập tên người phê duyệt"
          />
          {!formData.approver && (
            <span className="text-red-500 text-sm">Vui lòng nhập tên người phê duyệt</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarStyle={{ margin: 0 }} />
      </div>

      {/* Button Actions */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        // onClick={() => formData.resetForm()}
        >
          Đóng lại
        </button>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600">
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
});
