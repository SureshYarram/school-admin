
import { Route, Routes } from "react-router"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { SignUp } from "../Signup/Signup"
import { SingleTeacher } from "../SingleTeacher/SingleTeacher"
import {Navigate} from "react-router-dom"
export const AllRoutes = ()=>{
       
//   const PrivateRoute = ({isAuth,children})=>{
//     return isAuth ? children : <Navigate to ="/login"/>
// }
  
  return(

       <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<SignUp/>}></Route>
           <Route path="/class/:id" element={<SingleTeacher/>}></Route>
       </Routes>
  )

}