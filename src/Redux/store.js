import {combineReducers,createStore, applyMiddleware} from "redux";
import { Loginreducer } from "./Login/reducer";

import thunk from "redux-thunk"
import { Teacherreducer } from "./Teacher/reducer";



const rootReducer = combineReducers({

    login:Loginreducer,
   teacher :Teacherreducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))