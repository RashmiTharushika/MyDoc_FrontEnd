import React from 'react'
import './consult.css';
import Cardiology from '../../assest/images/Cardiology.png';
import Paediatric from '../../assest/images/Paediatric.png';
import Geriatric from '../../assest/images/Geriatric.png';
import Radiology from '../../assest/images/Radiology.png';
import Neurology from '../../assest/images/Neurology.png';
import Oncology from '../../assest/images/Oncology.png';


function Consult() {
  return (
    <div>

            <div>
                    <h3 className="heading">Please Choose Department</h3>
            </div>


        <div class="row row-cols-1 row-cols-md-3 g-4" id="card-all">

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-1" id="border">
                <img src={Cardiology} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle">CARDIOLOGY</h5>
                    
                </div>
                </div>
            </div>

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-2" id="border">
                <img src={Paediatric} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle">PAEDIATRIC</h5>
                   
                </div>
                </div>
            </div>

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-3" id="border">
                <img src={Geriatric} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle">GERIATRIC</h5>
                    </div>
                </div>
            </div>

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-4" id="border">
                <img src={Radiology} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle-2">RADIOLOGY</h5>
                    
                </div>
                </div>
            </div>

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-5" id="border">
                <img src={Neurology} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle-2">NEUROLOGY</h5>
                    
                </div>
                </div>
            </div>

            <div class="col" id='card-conmain'>
                <div class="card h-100 card-6" id="border">
                <img src={Oncology} class="card-img-top" alt="..." id="cardconimg"/>
                <div class="card-body">
                    <h5 class="card-title" id="maintitle-2">ONCOLOGY</h5>
                  
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Consult