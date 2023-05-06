import React, { useEffect } from 'react'
import { useState } from 'react';
import Header from '../Admin Header/Header'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import DataTable from 'react-data-table-component';
import './Media.css'
import Adminfooter from '../Admin Header/Adminfooter';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ReactPaginate from "react-paginate";
import {url} from '../../../API/api'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Mediamanage = () => {


  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const dataload = async () => {
    await axios.get(`${url}/media/view-media`)
      .then((res) => {
        setdata(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }
  const deleteData = async (id) =>{
    await axios.delete(`${url}/media/delete-media/`+id)
    .then((re)=>{
      dataload()
    })
  }


  useEffect(() => {
    dataload();
  }, [])

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <div className='container'>
        <button className='btn-add' onClick={(e) => navigate('/admin/dashboard/media/add')}>Add Data</button>
      </div>
      <div class="table-reponsive box my-5">
        <table id="example" class="table table-striped table-bordered" >
          <thead>
            <tr style={{ textAlign: 'center', fontSize: '20px' }}>
              <th colSpan={5} style={{ textAlign: 'center', fontSize: '20px' }} >Media  Data</th>
            </tr>
          </thead>
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th>Sr.No</th>
              <th>Image</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {
              data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, i) => {
                return (
                  <>
                    <tr >
                      <td>{i + 1 + pagesVisited}</td>
                      <td><img style={{width: '100px' , height: '100px'}} src={`/images/media/${item.media_image}`}/></td>
                      {/* <td>{item.media_image}</td> */}
                      <td style={{ textAlign: 'center' }}><Link style={{color: '#000' , fontSize: '20px'}} to={`/admin/dashboard/media/edit/${item._id}`}>Edit</Link></td>
                      <td style={{ textAlign: 'center' }}><button onClick={(e) => deleteData(item._id)} type='submit'>Delete</button></td>
                    </tr>
                  </>
                )
              })
            }

          </tbody>
        </table>
        <ReactPaginate
        previousLabel={<MdKeyboardArrowLeft size={25}/>}
        nextLabel={<MdKeyboardArrowRight size={25}/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
      {/* <Pagination count={10} /> */}
      </div>
      <Adminfooter/>

    </>
  )
}

export default Mediamanage