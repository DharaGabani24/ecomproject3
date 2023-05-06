import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Adminfooter from '../Admin Header/Adminfooter';
import Header from '../Admin Header/Header'
import {url} from '../../../API/api'
const Dashboardedit = () => {

    const id = useParams();
    const [data,setData] = useState({
        'name':'',
        'email':'',
        'phone':'',
        'role':'',
    })
    const onchange = (e) => {
        setData({...data, [e.target.name] : e.target.value })

    }

        useEffect(() =>{
            axios.get(`${url}/auth/get-single-users/`+id.id)
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
              console.log(error)
              alert(error)
            });
          },[])
    
    // console.log(data);

    const submitHandler = async (e) =>{
        e.preventDefault()

        await axios.patch('${url}/auth/update-users/'+id.id,data)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
            alert(err)
        })

    }


  return (
    <>
    <Header/>
    
    <div class="container-lg">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="contact-form">
                            <h1>User Dasboard</h1>
                            <form onSubmit={(e) => submitHandler(e)} >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Name</label>
                                            <input type="text" autoComplete='off' readOnly className="form-control" id="inputName" value={data.name}  name='name' onChange={onchange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input autoComplete='off' type="text" readOnly className="form-control" id="inputEmail" value={data.email}  name='email' onChange={onchange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Phone</label>
                                            <input type="text" autoComplete='off' readOnly className="form-control" id="inputName" value={data.phone}  name='phone' onChange={onchange} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="inputPhone">Role</label> <label htmlFor="inputPhone">1) 0 - users  , 2) 1 - admin</label>
                                            <input autoComplete='off' type="number"   max="1" min="0" className="form-control" id="inputPhone" value={data.role}  name='role' onChange={onchange} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary my-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Adminfooter/>

    </>
  )
}

export default Dashboardedit