import Slider from '../../../../based/components/common/Slider'
import LoginForm from './LoginForm'

export const Content = () => {
  return (
    <div className='bg-orange-400 flex flex-1 items-center'>
      <div className="flex w-[1400px] h-[400px] mx-auto items-center gap-12">
        <Slider />
        <LoginForm />
      </div>
    </div>
  )
}
