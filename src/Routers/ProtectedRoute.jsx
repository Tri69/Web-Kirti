import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = ()=>{
    const conditionAuth = localStorage.getItem('token');
    return conditionAuth.length <= 3  || conditionAuth == null ?  <Navigate  to="app/login" /> : <Outlet/>
}
export default ProtectedRoute;
