
import { mdiTrayArrowUp } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { useCreateOrUpdateContext, useStaffContext } from 'core-modules';
import { observer } from 'mobx-react';
import { ButtonAdd } from 'src/based/components/common/ButtonAdd';



const CreateOrUpdateStaffContainer = observer(() => {

  const {
    onCreateOrUpdate,
    setItemUpdate,
    itemUpdate,
    isCreateOrUpdate,
  } = useStaffContext();
  const {
    formData,
    resetFormData,
    validateForm,
    errorMessage,
    handleSubmit,
    isSubmitDisabled,
    handleCancel,
  } = useCreateOrUpdateContext();


  const handleFormSubmit = () => {
    const isSubmitted = handleSubmit();
    if (isSubmitted) {
      handleCancel(); // đóng form khi xử lý thành công
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Lưu trữ file vào formData
        if (reader.result) {
          formData.avatar = reader.result as string;
        }
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng URL
    }
    console.log(file);
  };

  return (
    <div className={classNames("p-4", {
      "block": isCreateOrUpdate,
      "hidden": !isCreateOrUpdate
    })} id='create-or-update'>

      <div className="flex gap-4">
        <div className='w-[260px] flex flex-col items-center'>
          <div className="mb-4">
            <div className=" relative w-[100px] h-[100px] rounded-full shadow-sm flex items-center justify-center bg-[#F5F5F5]">
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="opacity-0 cursor-pointer absolute"
                onChange={handleFileChange}
              />
              {formData.avatar ? (
                <img src={formData.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                <div className='flex flex-col items-center'>
                  <Icon path={mdiTrayArrowUp} size={1} className="text-gray-500" />
                  <span className="text-center text-xs text-blue-600">Chọn ảnh</span>
                </div>
              )}
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
              onChange={(event) => formData.status = event.target.value}
            />
            <span className='text-xs'>Hoạt động</span>
            <input
              type="radio"
              id="status-inactive"
              name="status"
              value="inactive"
              checked={formData.status === 'inactive'}
              onChange={(event) => formData.status = event.target.value}
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
              onChange={(event) => formData.fullName = event.target.value}

            />
          </div>

          <div className="mb-[2px] grid grid-cols-2 items-center gap-2">
            <label htmlFor="email" className="col-span-1 text-right text-md text-[#000]">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 border-b col-span-1 border-gray-300 text-md focus:outline-none focus:border-blue-500"
              placeholder="Nhập email"
              value={formData.email}
              onChange={(event) =>
                formData.email = event.target.value}
            />
          </div>

          <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
            <label htmlFor="phone" className="col-span-1 text-right text-md text-[#000] font-normal">Điện thoại:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className=" mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Nhập số điện thoại"
              value={formData.phone}
              onChange={(event) =>
                formData.phone = event.target.value}
            />
          </div>

          <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
            <label htmlFor="username" className="col-span-1 text-right text-md text-[#000]">Tên đăng nhập:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Nhập tên đăng nhập"
              value={formData.username}
              onChange={(event) =>
                formData.username = event.target.value}

            />
          </div>

          <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
            <label htmlFor="password" className="col-span-1 text-right text-md text-[#000]">Mật khẩu: </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={(event) => 
                formData.password = event.target.value}

            />
          </div>

          <div className="mb-4 grid grid-cols-2 items-center gap-2 text-md">
            <label htmlFor="confirmPassword" className="col-span-1 text-right text-md text-[#000]">Nhập lại mật khẩu:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 border-b col-span-1 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={(event) => 
                formData.confirmPassword = event.target.value}

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
          onClick={handleCancel}
          className="px-4 py-2 text-md font-medium hover:bg-gray-50 rounded-md"
        >
          Hủy bỏ
        </button>
        <ButtonAdd
          onClick={handleFormSubmit}
          title={itemUpdate ? 'Cập nhật' : 'Thêm mới'}
          isDisabled={isSubmitDisabled}
          size="small"

        />
      </div>

    </div>
  );
});

export {
  CreateOrUpdateStaffContainer
};
