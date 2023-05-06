import {useState , useEffect} from 'react'
import {useAuth} from '../../context/auth'
import {Outlet} from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loader/Loading'

export default function PrivateRoute() {
    
    
    
    const [ok,setok] = useState(false)
    const [auth,setauth] = useAuth()

    useEffect(()=>{
        const authCheck = async() =>{
            const resp = await axios.get('http://localhost:8080/api/user-auth',{
            })
            if (resp.data.ok) {
                setok(true)
            }else{
                setok(false)
            }
        }
        if (auth?.token) authCheck()
    },[auth?.token]);
                            // spinner add
    return ok ? <Outlet/> :  <Loading/>
}