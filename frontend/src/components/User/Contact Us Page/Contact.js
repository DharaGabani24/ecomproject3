import React from 'react'
import Footer from '../Header & Footer/Footer'
import Navbar from '../Header & Footer/Navbar'
import Loading from '../Loader/Loading'
import { useState , useEffect } from 'react'
import  './Contact.css'
import Scroll from '../Home Pages/Scroll'
const Contact = () => {
  const [isloading,setisloading] = useState(false)
  useEffect(()=>{
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  },[])
  return (
    <>


        {
          isloading ? <Loading/> :
          <div>
              <Navbar/>
              <div class="container-lg">
    <div className="row">
  <div className="col-md-10 mx-auto">
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p className="hint-text">We'd love to hear from you, please drop us a line if you've any query or question.</p>       
      <form action="/examples/actions/confirmation.php" method="post">
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" autoComplete='off' className="form-control" id="inputName" required />
            </div>
          </div>                
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input autoComplete='off' type="email" className="form-control" id="inputEmail" required />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="inputPhone">Phone</label>
              <input  autoComplete='off' type="text" className="form-control" id="inputPhone" required />
            </div>
          </div>
        </div>            
        <div className="form-group">
          <label htmlFor="inputSubject">Subject</label>
          <input autoComplete='off' type="text" className="form-control" id="inputSubject" required />
        </div>
        <div className="form-group">
          <label htmlFor="inputMessage">Message</label>
          <textarea className="form-control" id="inputMessage" rows={5} required defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary my-2"><i className="fa fa-paper-plane" /> Send</button>
      </form>
    </div>
  </div>
</div>
              </div>
              <Scroll/>
              <Footer/>

          </div>
        }


    </>
  )
}

export default Contact
