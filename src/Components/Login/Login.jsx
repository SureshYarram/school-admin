import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from "axios"
import    {useDispatch, useSelector}  from "react-redux"
import { loginSuccessDetails } from '../../Redux/Login/action';
import { Navigate, useNavigate } from 'react-router';
export const Login = () => {
const navigate = useNavigate()

   const {isAuth} = useSelector((store)=>store.login)
      const [logindata,setLogindata] = useState({
        email:"",
        password:""
      })
 const dispatch = useDispatch()
      const HandleChange = (e)=>{
          
        const {id,value} = e.target;
        setLogindata({...logindata,[id]:value})
      }

        const HandleSubmit = (e)=>{
          e.preventDefault();
         dispatch(loginSuccessDetails(logindata))
        }
 if(isAuth){
   navigate("/")
 }
    return(
        <div className='loginImg' >
            <Form className='form' onSubmit={HandleSubmit}>
                <h1>Login Here</h1><br />
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" onChange={HandleChange} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="password" onChange={HandleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group><br />
  <Button id='submitBtn' type="submit">
    Submit
  </Button>
</Form>
        </div>
    )

}