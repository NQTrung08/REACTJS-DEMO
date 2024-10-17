import { mdiTrayArrowUp } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { useCreateOrUpdateContext, useStaffContext } from 'core-modules';
import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
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
    handleSubmit,
    errorMessages, // Sử dụng errorMessages từ context
    isSubmitDisabled,
    handleCancel,
  } = useCreateOrUpdateContext();


  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [isFirstSubmit, setIsFirstSubmit] = useState(false);


  useEffect(() => {
    if (isFirstSubmit) {
      const { isValid, errors } = validateForm();
      if (!isValid) {
        const errorFields: any = {
          fullName: fullNameRef,
          email: emailRef,
          phone: phoneRef,
          username: usernameRef,
          password: passwordRef,
          confirmPassword: confirmPasswordRef,
        };
      }
    }
  }, [formData.fullName, formData.email, formData.phone, formData.username, formData.password, formData.confirmPassword, isFirstSubmit]);
  const handleFormSubmit = () => {
    setIsFirstSubmit(true);
    const { isValid, errors } = validateForm();
    if (!isValid) {
      for (const field in errors) {
        if (errors[field]) {
          const ref = {
            fullName: fullNameRef,
            email: emailRef,
            phone: phoneRef,
            username: usernameRef,
            password: passwordRef,
            confirmPassword: confirmPasswordRef,
          }[field];

          if (ref && ref.current) {
            ref.current.focus(); // focus vào trường có lỗi
            break; // chỉ focus vào trường đầu tiên có lỗi
          }
        }
      }
      return; // Dừng việc xử lý nếu có lỗi
    }
    const isSubmitted = handleSubmit();
    if (isSubmitted) {
      handleCancel();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          formData.avatar = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classNames("p-4", {
      "block": isCreateOrUpdate,
      "hidden": !isCreateOrUpdate
    })} id='create-or-update'>
      <div className="flex gap-4">
        <div className='w-[260px] flex flex-col items-center'>
          <div className="mb-4">
            <div className="relative w-[100px] h-[100px] rounded-full shadow-sm flex items-center justify-center bg-[#F5F5F5]">
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
          <div className=''>
            <div className="mb-[6px] grid grid-cols-2 items-center gap-2 text-[16px]">
              <label htmlFor="fullName" className="col-span-1 text-right text-lg font-medium text-[#000]">Họ và tên:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                ref={fullNameRef}
                className={classNames("mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.fullName, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.fullName, // Viền mặc định
                })}
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={(event) => formData.fullName = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho fullName */}
              {errorMessages.fullName && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.fullName}</div>
              )}
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2">
              <label htmlFor="email" className="col-span-1 text-right text-md text-[#000]">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                className={classNames("text-md mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.email, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.email, // Viền mặc định
                })}
                placeholder="Nhập email"
                value={formData.email}
                onChange={(event) => formData.email = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho email */}
              {errorMessages.email && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.email}</div>
              )}
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
              <label htmlFor="phone" className="col-span-1 text-right text-md text-[#000] font-normal">Điện thoại:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                ref={phoneRef}
                className={classNames("mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.phone, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.phone, // Viền mặc định
                })}
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(event) => formData.phone = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho phone */}
              {errorMessages.phone && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.phone}</div>
              )}
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
              <label htmlFor="username" className="col-span-1 text-right text-md text-[#000]">Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                name="username"
                ref={usernameRef}
                className={classNames("mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.username, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.username, // Viền mặc định
                })}
                placeholder="Nhập tên đăng nhập"
                value={formData.username}
                onChange={(event) => formData.username = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho username */}
              {errorMessages.username && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.username}</div>
              )}
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
              <label htmlFor="password" className="col-span-1 text-right text-md text-[#000]">Mật khẩu: </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                className={classNames("mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.password, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.password, // Viền mặc định
                })}
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={(event) => formData.password = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho password */}
              {errorMessages.password && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.password}</div>
              )}
            </div>

            <div className="mb-[2px] grid grid-cols-2 items-center gap-2 text-md">
              <label htmlFor="confirmPassword" className="col-span-1 text-right text-md text-[#000]">Nhập lại mật khẩu:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                ref={confirmPasswordRef}
                className={classNames("mt-1 border-b col-span-1 focus:outline-none", {
                  "border-red-500 focus:border-red-500 ": errorMessages.confirmPassword, // Viền đỏ khi có lỗi
                  "border-gray-300 focus:border-blue-500": !errorMessages.confirmPassword, // Viền mặc định
                })}
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={(event) => formData.confirmPassword = event.target.value}
              />
              {/* Hiển thị thông báo lỗi cho confirmPassword */}
              {errorMessages.confirmPassword && (
                <div className="mt-1 text-sm text-red-500 col-span-2 text-end">{errorMessages.confirmPassword}</div>
              )}
            </div>
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
          title={itemUpdate ? 'Cập nhật' : 'Thêm mới'}
          isDisabled={isSubmitDisabled}
          size="small"
        />
      </div>
    </div>
  );
});

export { CreateOrUpdateStaffContainer };
