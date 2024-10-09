import React, { useState } from 'react';
import { Staff } from 'core/src/model/staff-model';

interface AddStaffProps {
  onCancel: () => void;
  onAdd: (staff: Staff) => void;
}

const AddStaff: React.FC<AddStaffProps> = ({ onCancel,
  onAdd
}) => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    status: 'active',
  });

  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // vadidate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.username || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Vui lý nhap day du thong tin');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Vui lòng nhap lai mat khau');
      return;
    }

    const newStaff: Staff = {
      id: Date.now(),
      name: formData.fullName,
      middleName: '', 
      phone: formData.phone,
      email: formData.email,
      role: 'staff', 
      manager: '',
      avatar: '',
    };

    onAdd(newStaff);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      confirmPassword: '',
      status: 'active',
    });

    setErrorMessage('');
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Chia 2 cột */}
        <div className="flex gap-4">
          <div className='w-[260px]'>
            {/* upload avater */}s
            <div className="mb-4">
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="mt-1  w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* status */}
            <div className="mb-4 flex items-center gap-2">
              <label htmlFor="status" className=" text-xs font-medium text-gray-700">Trạng thái:</label>
              <input
                type="radio"
                id="status"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={(event) => setFormData(
                  { ...formData, status: event.target.value }
                )}
              />
              <span className='text-xs'>Khóa</span>
              <input
                type="radio"
                id="status"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={(event) => setFormData(
                  { ...formData, status: event.target.value }
                )}

              />
              <span className='text-xs'>Hoạt động</span>
            </div>
          </div>

          <div className='-ml-11'>
            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="fullName" className="col-span-1 text-right text-lg font-medium text-gray-900">Họ và tên:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={(event) => setFormData(
                  { ...formData, fullName: event.target.value }
                )}

              />
            </div>

            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="email" className="col-span-1 text-right text-[14px] text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập email"
                value={formData.email}
                onChange={(event) => setFormData(
                  { ...formData, email: event.target.value }
                )}
              />
            </div>

            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="phone" className="col-span-1 text-right text-[14px] text-gray-700">Điện thoại</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(event) => setFormData(
                  { ...formData, phone: event.target.value }
                )}
              />
            </div>

            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="username" className="col-span-1 text-right text-[14px] text-gray-700">Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập tên đăng nhập"
                value={formData.username}
                onChange={(event) => setFormData(
                  { ...formData, username: event.target.value }
                )}
              />
            </div>

            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="password" className="col-span-1 text-right text-[14px] text-gray-700">Mật khẩu: </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={(event) => setFormData(
                  { ...formData, password: event.target.value }
                )}
              />
            </div>

            <div className="mb-4 grid grid-cols-2 items-center gap-2">
              <label htmlFor="confirmPassword" className="col-span-1 text-right text-[14px] text-gray-700">Nhập lại mật khẩu:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={(event) => setFormData(
                  { ...formData, confirmPassword: event.target.value }
                )}
              />
            </div>
            <div className="mb-4 grid items-center">
              {errorMessage && (
                <div className="mt-2 text-sm text-red-500 text-right">{errorMessage}</div>
              )}
            </div>

          </div>
        </div>


        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Hủy bỏ
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Thêm mới
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStaff;
