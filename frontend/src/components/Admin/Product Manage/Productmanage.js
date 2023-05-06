import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Adminfooter from '../Admin Header/Adminfooter'
import Header from '../Admin Header/Header'
import SweetPagination from "sweetpagination";
import './Product.css'
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {url} from '../../../API/api'

const Productmanage = () => {

  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const dataload = async () => {
    await axios.get(`${url}/product/view-product`)
      .then((res) => {
        setdata(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
 
  const deleteData = async (id) => {
    await axios.delete(`${url}/product/delete-product/` + id)
      .then((re) => {
        dataload()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    dataload();
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <button className='btn-add' onClick={(e) => navigate('/admin/dashboard/product/add')}>Add Data</button>
      </div>
      <div class="table-reponsive box my-5">
        <table id="example" class="table table-striped table-bordered">
          <thead>
            <tr style={{ textAlign: 'center', fontSize: '20px' }}>
              <th colSpan={9} style={{ textAlign: 'center', fontSize: '20px' }} >Product  Data</th>
            </tr>
          </thead>
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th>Sr.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Reviews Star</th>
              <th>Desc</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              // .slice(page * 6 - 6, page * 6)
              data .slice(pagesVisited, pagesVisited + usersPerPage).map((item, i) => {
                return (
                  <>
                    <tr>
                      <td>{ i + 1 + pagesVisited }</td>
                      <td><img style={{ width: '50px', height: '50px' }} src={`/images/product/${item.product_image}`} /></td>
                      <td>{item.product_name}</td>
                      <td>{item.product_price}</td>
                      <td>{item.product_discount}</td>
                      <td>{item.product_reviews}</td>
                      <td>{item.product_description.slice(0, 10)}...</td>
                      <td style={{ textAlign: 'center' }}><Link style={{color: '#000' , fontSize: '20px'}} to={`/admin/dashboard/product/edit/${item._id}`}>Edit</Link></td>
                      <td style={{ textAlign: 'center' }}><button type='submit' onClick={() => deleteData(item._id)}>Delete</button></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
        <div className=''>
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
        </div>
      </div>
      <Adminfooter />
    </>
  )
}

export default Productmanage