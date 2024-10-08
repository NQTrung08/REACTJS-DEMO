import { LoginProvider } from 'core-modules'
import LoginHeader from '../components/Header'
import LoginFooter from '../components/Footer'
import Content from '../components/Content'

export const LoginScreen = () => {
    return <LoginProvider>
        <div className='border-4 min-h-screen flex flex-col bg-gray-100'>
            <LoginHeader />
            <Content />  
            <LoginFooter />
        </div>
    </LoginProvider>
}