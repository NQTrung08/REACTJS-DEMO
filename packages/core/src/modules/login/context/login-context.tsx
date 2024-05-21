import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
export class LoginContextType {
};
export const LoginContext = React.createContext<LoginContextType | null>(null);
interface IProps {
    children: React.ReactNode;
}
export const LoginProvider = observer(({ children }: IProps) => {
    const value = useHookLogin();
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
})

function useHookLogin(): LoginContextType {
    const onLogin = useCallback(() => {
    }, [])
    return {
        onLogin,
    }
}

export function useLoginContext(): LoginContextType {
    return React.useContext(LoginContext) as LoginContextType
}