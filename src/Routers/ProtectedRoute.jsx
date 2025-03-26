import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = ()=>{
    const conditionAuth = localStorage.getItem('token');
    return conditionAuth.length >= 10  || !conditionAuth? <Outlet/> : <Navigate  to="app/login" />
}
export default ProtectedRoute;
