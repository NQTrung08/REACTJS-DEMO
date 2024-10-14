import React, { useState, useEffect } from 'react';
import { StaffModel } from 'core-model';

import Icon from '@mdi/react';
import { mdiTrayArrowUp } from '@mdi/js';
import ButtonAdd from 'src/based/components/common/ButtonAdd';


interface FormStaffProps {
  initialData?: StaffModel | null; 
  onCancel: () => void;
  onSubmit: (staff: StaffModel) => void;
}

const CreateOrUpdateStaffContainer = ({ initialData, onCancel, onSubmit }: FormStaffProps) => {

  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    status: 'active',
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');

  // Nếu có dữ liệu ban đầu (trong trường hợp cập nhật), cập nhật formData
  useEffect(() => {
    if (initialData) {
      setFormData({
        fullName: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        username: initialData.username || '',
        password: initialData.password || '',
        confirmPassword: '',
        status: initialData.status || 'active',
      });
    }
  }, [initialData]);

  // So sánh dữ liệu form

  useEffect(() => {
    const isFormChanged =
      formData.fullName !== (initialData?.name || '') ||
      formData.email !== (initialData?.email || '') ||
      formData.phone !== (initialData?.phone || '') ||
      formData.username !== (initialData?.username || '') ||
      formData.status !== (initialData?.status || 'active') ||
      (!initialData && (formData.password || formData.confirmPassword)); // Trong trường hợp thêm mới

    setIsSubmitDisabled(!isFormChanged);
  }, [formData, initialData]);
  const handleSubmit = () => {
    // event.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.username || (!initialData && !formData.password) || formData.password !== formData.confirmPassword) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin và đảm bảo mật khẩu khớp nhau.');
      return;
    }

    const emailRegex = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Vui lòng nhập email hợp lệ.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage('Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }

    const newStaff: StaffModel = {
      id: initialData ? initialData.id : Date.now(),
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      middleName: '',
      username: formData.username,
      password: initialData ? initialData.password : formData.password, // Chỉ thêm mật khẩu khi tạo mới
      status: formData.status,
      role: 'staff',
      manager: '',
      avatar: '',
    };

    onSubmit(newStaff);

    // Nếu là cập nhật, không reset formData
    if (!initialData) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        status: 'active',
      });
    }

    setErrorMessage('');
  }

  return (
    <div className="p-4">
      
        <div className="flex gap-4">
          <div className='w-[260px] flex flex-col items-center'>
            <div className="mb-4">
              <div className=" relative w-[100px] h-[100px] rounded-full shadow-sm flex items-center justify-center bg-[#F5F5F5]">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  className="opacity-0 cursor-pointer absolute"
                />
                <div className='flex flex-col items-center'>
                  <Icon path={mdiTrayArrowUp} size={1} className="text-gray-500" />
                  <span className="text-center text-xs text-blue-600">Chọn ảnh</span>

                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <label htmlFor="status" className="text-xs font-medium text-gray-700">Trạng thái:</label>
              <input
                type="radio"
                id="status-active"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={(event) => setFormData({ ...formData, status: event.target.value })}
              />
              <span className='text-xs'>Hoạt động</span>
              <input
                type="radio"
                id="status-inactive"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={(event) => setFormData({ ...formData, status: event.target.value })}
              />
              <span className='text-xs'>Khóa</span>
            </div>
          </div>

          <div className='-ml-11'>
            <div className="mb-[6px] grid grid-cols-2 items-center gap-2 text-[16px]">
              <label htmlFor="fullName" className="col-span-1 text-right text-lg font-medium text-[#000]">Họ và tên:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500 font-medium"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={(event) => setFormData(
                  { ...formData, fullName: event.target.value }
                )}

              />
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2">
              <label htmlFor="email" className="col-span-1 text-right text-[14px] text-[#000]">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 border-b col-span-1 border-gray-300 text-[14px] focus:outline-none focus:border-blue-500"
                placeholder="Nhập email"
                value={formData.email}
                onChange={(event) => setFormData(
                  { ...formData, email: event.target.value }
                )}
              />
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-[14px]">
              <label htmlFor="phone" className="col-span-1 text-right text-[14px] text-[#000] font-normal">Điện thoại:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className=" mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(event) => setFormData(
                  { ...formData, phone: event.target.value }
                )}
              />
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-[14px]">
              <label htmlFor="username" className="col-span-1 text-right text-[14px] text-[#000]">Tên đăng nhập:</label>
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

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-[14px]">
              <label htmlFor="password" className="col-span-1 text-right text-[14px] text-[#000]">Mật khẩu: </label>
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

            <div className="mb-4 grid grid-cols-2 items-center gap-2 text-[14px]">
              <label htmlFor="confirmPassword" className="col-span-1 text-right text-[14px] text-[#000]">Nhập lại mật khẩu:</label>
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

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-md font-medium hover:bg-gray-50 rounded-md"
          >
            Hủy bỏ
          </button>
          <ButtonAdd 
            onClick={handleSubmit}
            title={initialData ? 'Cập nhật' : 'Thêm mới'}
            isDisabled={isSubmitDisabled}
            size="small"
          
          />
        </div>

    </div>
  );
};

export {
  CreateOrUpdateStaffContainer
};
