import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Adminfooter from '../Admin Header/Adminfooter';
import Header from '../Admin Header/Header'
import './Blog.css'
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { url} from '../../../API/api'

const Blogmanage = () => {
  const navigate = useNavigate();
  const [data,setdata] = useState([]);

  const dataload = async () =>{
      await axios.get(`${url}/blog/view-blog`)
      .then((res)=>{
        setdata(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const deleteData = async (id) =>{
    await axios.delete(`${url}/blog/delete-blog/`+id)
    .then((re)=>{
      dataload()
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    dataload();
  },[])
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
        <Header/>
      
      <div className='container'>
        <button className='btn-add' onClick={(e) => navigate('/admin/dashboard/blog/add')}>Add Data</button>
        </div>
        <div class="table-reponsive box my-5">
        <table id="example" class="table table-striped table-bordered">
          <thead>
            <tr style={{ textAlign: 'center', fontSize: '20px' }}>
              <th colSpan={9} style={{ textAlign: 'center', fontSize: '20px' }} >Blog Data</th>
            </tr>
          </thead>
          <thead>
            <tr style={{ textAlign: 'center' }}>
            <th>Sr.No</th>
              <th> Image</th>
              <th> Title</th>
              <th> Description</th>
              <th> Writename</th>
              <th> Date</th>
              <th> Full Desc</th>
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
                      <td>{i+1 + pagesVisited}</td>
                      <td><img style={{width: '50px' , height: '50px'}} src={`/images/blog/${item.blog_image}`}/></td>
                      <td>{item.blog_title}</td>
                      <td>{item.blog_desc.slice(0, 18)}</td>
                      <td>{item.blog_writername}</td>
                      <td>{item.blog_date}</td>
                      <td>{item.blog_fulldesc.slice(0, 18)}</td>
                      <td><Link style={{color: '#000' , fontSize: '20px'}} to={`/admin/dashboard/blog/edit/${item._id}`}>Edit</Link></td>
                      <td><button type='submit' onClick={() => deleteData(item._id)}>Delete</button></td>
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
      
<Adminfooter/>
      </>
  )
}

export default Blogmanage