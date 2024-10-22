import { Outlet } from "react-router-dom"
import { BreadCrumb } from "src/based/components/common/BreadCrumb"
import { SubNavAccountant } from "../components/sub-nav-accountant"

export const AccountantScreen = () => {
  return (
    <>
      <BreadCrumb title='Kế toán / Đề nghị thanh toán' />
      <div className='flex h-full w-full'>
        <SubNavAccountant />
        <Outlet />
      </div>
    </>
  )

}

