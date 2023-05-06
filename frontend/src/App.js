import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom"
import { withRouter } from 'react-router-dom';
//  Admin

import Dashboard from './components/Admin/Dashboard/Dashboard';
import Productmanage from './components/Admin/Product Manage/Productmanage';
import Blogmanage from './components/Admin/Blog Manage/Blogmanage';
import Mediamanage from './components/Admin/Media Manage/Mediamanage';
import Loginadmin from './components/Admin/Login/Loginadmin';
import AdminRoutes from './components/User/Routes/AdminRoutes'


// User

import Home from './components/User/Home Pages/Home'
import Shop from './components/User/Shop Pages/Shop'
import SingleProduct from './components/User/Shop Pages/SingleProduct'
import Blog from './components/User/Blog Page/Blog'
import Media from './components/User/Media Page/Media'
import Contact from './components/User/Contact Us Page/Contact'
import Login from './components/User/Login & Registor/Login'
import Register from './components/User/Login & Registor/Register'
import Addtocard from './components/User/Add to cart/Addtocard';
import Mediadd from './components/Admin/Media Manage/Mediadd';
import Productadd from './components/Admin/Product Manage/Productadd';
import Blogadd from './components/Admin/Blog Manage/Blogadd';
import Productedit from './components/Admin/Product Manage/Productedit';
import Mediaedit from './components/Admin/Media Manage/Mediaedit';
import Blogedit from './components/Admin/Blog Manage/Blogedit';
import Dashboardedit from './components/Admin/Dashboard/Dashboardedit';
// import Buynow from './components/User/Buy Now/Buynow';
import Addblog from './components/User/Blog Page/Addblog';
import Topscroll from './components/User/TopScroll/Topscroll';
import Gototop from './components/User/TopScroll/Gototop';
import Order from './components/User/Order/Order';
import Blogsingle from './components/User/Blog Page/Blogsingle';
import Blogsingles from './components/User/Blog Page/Blogsingles';
import Pay from './components/User/Payments/Pay';
import Checkout from './components/User/Payments/Checkout';
import Demoedit from './components/Admin/Media Manage/Demoedit';
import CheckoutSuccess from './components/User/Payments/CheckoutSuccess';

// Node JS -> Folder Name is api1


function App() {
  return (
    <>
    <Topscroll/>
    {/* <BrowserRouter> */}
          <Routes>
          {/* User */}
          

            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Addtocard/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blogsingle/:id' element={<Blogsingle/>}/>
            <Route path='/blogsingles/:id' element={<Blogsingles/>}/>
            <Route path='/pay' element={<Pay/>}/>
            <Route path='/blogadd' element={<Addblog/>}/>
            <Route path='/media' element={<Media/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/buynow' element={<Buynow/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/checkout-success' element={<CheckoutSuccess/>}/>

            {/* Admin Route */}
            <Route path='/admin/login' element={<Loginadmin/>} /> 
            <Route path='/admin' element={<AdminRoutes/>}>
                    <Route path='dashboard' element={<Dashboard/>} />       
                    <Route path='dashboard/edit/:id' element={<Dashboardedit/>} />       
                    <Route path='dashboard/product' element={<Productmanage/>} />  
                    <Route path='dashboard/product/add' element={<Productadd/>} />       
                    <Route path='dashboard/product/edit/:id' element={<Productedit/>} />       
                    <Route path='dashboard/blog' element={<Blogmanage/>} />       
                    <Route path='dashboard/blog/add' element={<Blogadd/>} />       
                    <Route path='dashboard/blog/edit/:id' element={<Blogedit/>} />       
                    <Route path='dashboard/media' element={<Mediamanage/>} />       
                    <Route path='dashboard/media/add' element={<Mediadd/>} />       
                    {/* <Route path='dashboard/media/edit/:id' element={<Mediaedit/>} />        */}
                    <Route path='dashboard/media/edit/:id' element={<Demoedit/>} />       
                    <Route path='dashboard/product' element={<Productmanage/>} />       
            </Route>      

          {/* <Gototop/> */}
          </Routes> 
        {/* </BrowserRouter> */}
    </>
  );
}

export default App;
