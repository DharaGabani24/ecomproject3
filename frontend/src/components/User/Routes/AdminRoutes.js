import {useState , useEffect} from 'react'
import {useAuth} from '../../..//context/auth'
import {Outlet} from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loader/Loading'
import Loader from './Loader'
import {url} from '../../../API/api'


export default function AdminRoutes() {

    const [isloading,setisloading] = useState(false)
    useEffect(()=>{
      setisloading(true)
      setTimeout(() => {
        setisloading(false)
      }, 1000);
    },[])
    
    
    const [ok,setok] = useState(false)
    const [auth,setauth] = useAuth()

    useEffect(()=>{
        const authCheck = async() =>{
            const resp = await axios.get(`${url}/auth/admin-auth`,{
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
    return ok ? <Outlet/> :  <Loader path=''/>
                 
}