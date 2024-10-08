import { LoginProvider } from 'core-modules'
import LoginHeader from '../../../based/components/common/Header'
import LoginFooter from '../../../based/components/common/Footer'
import Content from '../containers/login/Content'

export const LoginScreen = () => {
    return <LoginProvider>
        <div className='border-4 min-h-screen flex flex-col bg-gray-400'>
            <Content />  
        </div>
    </LoginProvider>
}