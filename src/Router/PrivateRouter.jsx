
import { Navigate, Outlet } from 'react-router-dom'
import {  useSession } from '../Context/SessionContext';

const PrivateRouter = () => {

    const {userInfo} = useSession()

return userInfo ? <Outlet/>: <Navigate to="/SignIn"/>;
}
export const AdminRouter = () => {
    const {userInfo} = useSession()
return userInfo.email==="peykani@gmail.com" ? <Outlet/>: <Navigate to="/SignIn"/>;
}


export default PrivateRouter