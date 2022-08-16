
import './App.css';
import bali from './bali.jpg'

function App() {
  return (
    <div>
       <div class="container">
  <h2 className='header'>OZ Bali<span className='spanheader'>.</span></h2>
  </div>
    <div class="container">
    <div class="row">
    <div class="col-lg-2"> 
  </div>
    <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12">
        <p className='maintext'>Website under construction</p>
        <p>Our Website is currently being build by the experts. We will be published shortly. Thank you for your patience.</p>
        <p>For enquiries, please contact us by clicking the button below.</p>
        <button onClick={() => window.location = 'mailto: contact@ozbali.com.au'} className='button' Target='_blank'>Get in touch.</button>
        <div class="wrapper">
        </div>
        </div>
    <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12"> 
  <img src={bali} className='img-responsive img-fluid center-block' alt="Logo"/>
  </div>
  <div class="col-lg-2"> 
  </div>
  
</div>
   
  </div>
 <div className='container'>
  <br/>
 <hr/>
 <p>All rights reserved.
 <span className='left'>&copy; Copyright 2022. Designed with &#9829;</span></p>
 </div>

  </div>
  );
}

export default App;
