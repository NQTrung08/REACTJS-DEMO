import { StaffModel } from 'core-model';
import { useEffect, useState } from 'react';

import { mdiTrayArrowUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useCreateOrUpdateContext, useStaffContext } from 'core-modules';
import ButtonAdd from 'src/based/components/common/ButtonAdd';


interface FormStaffProps {
  initialData?: StaffModel | null; 
  onCancel: () => void;
  onSubmit: (staff: StaffModel) => void;
}

const CreateOrUpdateStaffContainer = ({ initialData, onCancel, onSubmit }: FormStaffProps) => {

  const {
    selectedStaff,
    setSelectedStaff,
    addStaff,
    updateStaff,
    isCreateOrUpdate,
    onCreateOrUpdate,
  } = useStaffContext();
  const {
    formData,
    setFormData,
    resetFormData,
    validateForm,
    errorMessage,
  } = useCreateOrUpdateContext();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  useEffect(() => {
   
    if (initialData) {
     
      setFormData({
        ...initialData,
       
        status: initialData.status,
        fullName: initialData.name,
        
      });
    } else {
      resetFormData();
    }
  }, [initialData]);

  
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

  const handleSubmitForm = () => {
    const { isValid, error } = validateForm();
    if (!isValid) {
      console.error(error); // Handle error (e.g., show a toast notification)
      return;
    }
  
    const newStaff: StaffModel = {
      id: selectedStaff ? selectedStaff.id : Date.now(),
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      username: formData.username,
      password: selectedStaff ? selectedStaff.password : formData.password,
      status: formData.status,
      middleName: '',
      role: 'staff',
      manager: '',
      avatar: ''
    };
  
    if (selectedStaff) {
      updateStaff(newStaff.id, newStaff); // Update existing staff
    } else {
      addStaff(newStaff); // Add new staff
    }
  
    resetFormData(); // Reset form after submission
    onCreateOrUpdate(!isCreateOrUpdate);
  };
  

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
            onClick={handleSubmitForm}
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
