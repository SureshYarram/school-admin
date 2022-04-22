
import { GETDATA_LOADING , GETDATA_SUCCESS , GETDATA_ERROR} from "./action"


const initState = {
  
    loading:false,
     teacher:[],
    error:false

}




const Teacherreducer = (store=initState , {type,payload})=>{

      switch(type){
        case GETDATA_LOADING:
        return {...store , loading:true}
          case GETDATA_SUCCESS:
           return {...store , loading:false , teacher:[...payload] , error:false }
           case GETDATA_ERROR:
            return {...store, loading:false , isAuth:false , error:true} 
            default:
            return store
      }

}

export {Teacherreducer}