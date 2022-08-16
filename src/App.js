
import './App.css';
import bali from './bali.jpg';
import image from './bannerimage.jpg';
import bizone from  './bizone.jpg';
import biztwo from './biztwo.jpg';

function App() {
  return (
    <div>
        <div class="container">
    <div class="row">
       <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4"> 
       <img src={image} className='img-responsive img-fluid center-block banner' alt="Logo"/>
       </div>
       <div class="col-lg-10 col-md-8 col-sm-8 col-xs-12"> 
       <h2 className='header'>PT. AUSTRALIA <span className='spanheader'>BALI</span> CONNECTIONS</h2>
       <p>100% Australian Owned Indonesian Company</p>
       <hr className='hrlen'/>
       <p className='subbanner'>Office | Showroom - Open 7 Days<br/>
       <strong>JL Sriwijaya No. 5 Legian - Opposite MERCURE HOTEL</strong></p>
  </div>
  </div>
  
  </div>
    <div class="container">
    <div class="row">
    <div class="col-lg-2"> 
  </div>
    <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12">
        <p className='maintext'>Website under construction</p>
        <p>Our Website is currently being built by the experts. We will be published shortly. Thank you for your patience.</p>
        <p>For enquiries, please contact us by clicking the button below.</p>
        <button onClick={() => window.location = 'mailto: contact@ozbali.com.au'} className='button' Target='_blank'>Get in touch.</button>
        <div class="wrapper">
        </div>
        </div>
    <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12"> 
  <img src={bali} className='img-responsive img-fluid center-block pad' alt="Logo"/>
  </div>
  <div class="col-lg-2"> 
  </div>
</div>
  </div>
  <br/>
  <div class="container">
    <div class="row">
    <div class="col-lg-2"> 
  </div>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"> 
  <img src={bizone} className='img-responsive img-fluid center-block' alt="Logo"/>
  <p className='text-center'><em><strong>Inspiring Destinations - Creating Memories</strong></em></p>
  </div>
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"> 
  <img src={biztwo} className='img-responsive img-fluid center-block' alt="Logo"/>
  <p className='text-center'><em><strong>The Aussie Bound LCL &amp; FCL Cargo Experts</strong></em></p>
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
