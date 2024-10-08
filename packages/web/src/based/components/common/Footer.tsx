import React from 'react'


const methods = [
  {
    id: 1,
    name: 'VISA',
    image: 'https://logospng.org/wp-content/uploads/visa.jpg'
  },
  {
    id: 2,
    name: 'MasterCard',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png'
  },
  {
    id: 3,
    name: 'JCB',
    image: 'https://www.vn.jcb/vi/common/images/svg/jcb_emblem_logo.svg'
  },
  {
    id: 4,
    name: 'PayPal',
    image: 'https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98395aa0ff2815_paypal-logo-preview.webp'
  }
]
const Footer = () => {
  return (
    <div className='bg-gray-100'>
      <div className='footer pt-10 w-[1400px] mx-auto'>
        <div className="grid grid-cols-5 gap-[7rem]">
          {/* Care Customer */}
          <div className="col-span-1 min-w-[150px]">
            <span className='text-xs uppercase font-bold text-gray-700'>
              Chăm sóc khách hàng
            </span>
            <div className="mt-2">
              <span className='block text-sm text-gray-600'>Trung tâm trợ giúp</span>
            </div>
            <div>
              <span className='block text-sm text-gray-600'>Hướng dẫn sử dụng</span>
            </div>
            <div>
              <span className='block text-sm text-gray-600'>Chính sách bảo mật & vận hành</span>
            </div>
          </div>

          {/* About ORES */}
          <div className="col-span-1">
            <span className='text-xs uppercase font-bold text-gray-700'>
              Về ORES
            </span>
            <div className='mt-2 text-sm text-gray-600'>Giới thiệu về ORES Việt Nam</div>
            <div className='text-sm text-gray-600'>Tuyển dụng</div>
            <div className='text-sm text-gray-600'>Điều khoản sử dụng</div>
            <div className='text-sm text-gray-600'>Chính sách bảo mật</div>
            <div className='text-sm text-gray-600'>Truyền thông</div>
          </div>

          <div className='col-span-1'>
            <div className="">
              <span className='text-xs uppercase font-bold text-gray-700'>
                Thanh Toán
              </span>
              {/* Payment method */}
              <div className='mt-2 grid grid-cols-3 gap-2'>
                {
                  methods.map((method) => (
                    <div key={method.id} className='bg-white rounded-sm flex justify-center items-center'>
                      <img src={method.image} alt={method.name} className='object-contain w-6' />
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='mt-4'>
              <span className='text-[12px] uppercase font-bold text-gray-700'>
                Đơn vị vận chuyển
              </span>
              <div className='mt-2 grid grid-cols-3 gap-2'>
                {
                  methods.map((method) => (
                    <div key={method.id} className='bg-white rounded-sm flex justify-center items-center'>
                      <img src={method.image} alt={method.name} className='object-contain w-6' />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>


          <div className="col-span-1">
            <span className='text-[12px] uppercase font-bold text-gray-700'>
              Theo dõi chúng tôi trên
            </span>
            <div className='text-sm text-gray-600'>Facebook</div>
            <div className='text-sm text-gray-600'>Twitter</div>
            <div className='text-sm text-gray-600'>Instagram</div>
          </div>

          <div className="col-span-1">
            <span className=' text-[12px] uppercase font-bold text-gray-700'>
              Tải ứng dụng ORES ngay thôi
            </span>
            <div className='flex gap-2'>
              <div className='text-sm text-gray-600'>
                ORCODE
              </div>
              <div className=''>
                <div className='text-sm text-gray-600'>Appstore</div>
                <div className='text-sm text-gray-600'>Google Play</div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex justify-between mt-10 border-t-2 pt-4 pb-4 flex-shrink-0">
          <div className="copyright text-sm">
            @2021 Design & Developed by OWS VIET NAM | All rights reserved
          </div>
          <div className="address text-right">
            <div className='text-sm font-bold text-[#333]'>CÔNG TY CỔ PHẦN OWS VIỆT NAM</div>
            <p className='text-sm text-gray-500'>
              Hà Nội: 14 Nguyễn Cảnh Dị, Phường Đại Kim, Quận Hoàng Mai, Hà Nội, Việt Nam
              <br />
              Tokyo: 230-00082, Kanagawa, Yokohama, Tsurumi-ku, Toyookacho, 34-18 Hermitage 103
              <br />
              024.730.959.95
              <br />
              infor@ores.vn
            </p>
          </div>

        </div>
      </div>
    </div>



  )
}

export default Footer