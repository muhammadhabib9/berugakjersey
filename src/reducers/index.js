import { combineReducers } from "redux";
import UserReducer from './user'
import RajaOngkirReducer from './rajaongkir'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import LigaReducer from './liga'
import JerseyReducer from './jersey'
import KeranjangReducer from './keranjang'
import PaymentReducer from './payment'




const rootReducer = combineReducers ({
    UserReducer,
    RajaOngkirReducer,
    AuthReducer,
    ProfileReducer,
    LigaReducer,
    JerseyReducer,
    KeranjangReducer,
    PaymentReducer,
  
})

export default rootReducer