import { useParams } from "react-router"
import axios from "axios"
import {useDispatch, useSelector}  from "react-redux"
import { useEffect, useState } from "react";
import { TeacherDataDetails } from "../../Redux/Teacher/action";


 export  const SingleTeacher = ()=>{

 const {id} = useParams();
 
    const dispatch = useDispatch();
 useEffect(()=>{
    GetData()
  },[])

  const data = useSelector((store)=>store.teacher.teacher)
  console.log(data.length)
  
  const GetData = ()=>{

        dispatch(TeacherDataDetails(id))
} 

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>class</th>
                        <th>section</th>
                        <th>subject</th>
                    </tr>
                    </thead>
                    <tbody>
                       {data.map((el)=>(
                        <tr key = {el._id}>
                        <td>{el.grade}</td>
                        <td>{el.section}</td>
                        <td>{el.subject}</td>
                        </tr>
                        ))}
                    </tbody>
               
            </table>
        </div>
    )

}