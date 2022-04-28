
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { SessionContext } from '../Context/SessionContext';

const PrivateRouter = () => {

    const {userInfo} = useContext(SessionContext)

return userInfo ? <Outlet/>: <Navigate to="/SignIn"/>;
}
export const AdminRouter = () => {
    const {userInfo} = useContext(SessionContext)
return userInfo.email==="peykani@gmail.com" ? <Outlet/>: <Navigate to="/SignIn"/>;
}

export default PrivateRouter