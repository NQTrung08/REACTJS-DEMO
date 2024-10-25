import { mdiAccountOutline, mdiCheckCircleOutline, mdiStorefrontOutline } from "@mdi/js"
import Icon from "@mdi/react"
import classNames from "classnames"
import { observer } from "mobx-react"

interface IProps {
  tab: number
}

export const FilterExtend = observer(({
  tab
}: IProps) => {


  return (
    <div className="">
      <div className='px-2'>

        <div className="flex items-center text-gray-500 gap-2 text-xs">
          <Icon path={mdiAccountOutline} className='size-4 text-gray-500' />
          <label className="text-gray-500 text-xs font-medium">Nhân viên thụ hưởng:</label>
          <div
            className={classNames('cursor-pointer px-2 py-1 rounded-3xl bg-blue-50 text-blue-600')}
          >
            Tất cả
          </div>
        </div>

        <div className="flex mt-2 items-center text-gray-500 gap-2 text-xs">
          <Icon path={mdiStorefrontOutline} className='size-4 text-gray-500' />
          <label className="text-gray-500 text-xs font-medium">Nhà cung cấp thụ hưởng:</label>
          <div
            className={classNames('cursor-pointer px-2 py-1 rounded-3xl bg-blue-50 text-blue-600')}
          >
            Tất cả
          </div>
        </div>
      </div>

      {/* Thêm các filter nâng cao khác tùy ý */}
      <div className='border-t mt-4'>
        <div className="px-3 py-2 flex justify-end">
          <button className="rounded-sm px-4 py-2">Đóng lại</button>
          <button className="flex items-center gap-2 bg-blue-600 rounded-sm text-white font-medium px-4 py-2">
            <Icon path={mdiCheckCircleOutline} className='w-4 h-4' />
            <span>
              Áp dụng
            </span>
          </button>
        </div>
      </div>
    </div>
  )
})
