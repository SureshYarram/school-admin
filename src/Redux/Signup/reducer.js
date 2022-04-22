
import { SIGNUP_LOADING , SIGNUP_SUCCESS , SIGNUP_ERROR} from "./action"


const initState = {
  
    loading:false,
    isAuth:false,
    token:"",
    error:false

}




const Signupreducer = (store=initState , {type,payload})=>{

      switch(type){
        case SIGNUP_LOADING:
            return {...store , loading:true}
          case SIGNUP_SUCCESS:
              return {...store , loading:flase , isAuth:true , token:payload , error:false }
              case SIGNUP_ERROR:
                  return {...store, loading:flase , isAuth:false , error:true} 
                  default:
                      return store
      }

}

export {Signupreducer}