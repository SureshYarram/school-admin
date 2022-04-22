import axios from "axios";


export const GETDATA_LOADING = "GETDATA_LOADING";
export const GETDATA_SUCCESS = "GETDATA_SUCCESS";
export const GETDATA_ERROR = "GETDATA_ERROR";


export const GetDataLoading = ()=>({
    type:GETDATA_LOADING
})

export const GetDataSuccess = (payload)=>({
    type:GETDATA_SUCCESS,
    payload
})
export const GetDataError = ()=>({
    type:GETDATA_ERROR
})




export const TeacherDataDetails = (id)=>(dispatch)=>{
   
      dispatch(GetDataLoading());
      axios.get(`https://school-admin-suresh.herokuapp.com/class/${id}`).then((res)=>{
          dispatch(GetDataSuccess(res.data));
      }).catch(()=>{
        GetDataError()
      })
      
}

