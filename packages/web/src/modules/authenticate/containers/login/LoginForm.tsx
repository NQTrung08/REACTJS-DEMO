import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tbutton from '../../../../based/components/common/Tbutton';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const naviate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (!username || !password) {
      setError('Vui lý nhap day du thong tin');
      return;
    }

    if (username === 'admin' && password === '123456') {
      naviate('/home');
    }
  };

  return (
    <div className='bg-white p-10 rounded-md h-full w-[400px]'>
      <div className="mb-12">
        <h3 className="text-gray-800 text-3xl font-extrabold">Đăng nhập</h3>
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder='Tài khoản/SĐT'
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        />
        <div className='mt-4'>
          <input
            type="password"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder='Mật khẩu'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>} {/* Hiển thị thông báo lỗi */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-3 block text-sm text-gray-800">Ghi nhớ</label>
        </div>
        <div>
          <a className="text-blue-600 font-semibold text-sm hover:underline">Quên mật khẩu?</a>
        </div>
      </div>


        <Tbutton title="Đăng nhập" onClick={handleLogin} />
    </div>
  );
}

export default LoginForm;
