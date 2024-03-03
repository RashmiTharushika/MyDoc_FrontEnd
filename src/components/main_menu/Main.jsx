import React from 'react'
import './main.css'
import Consulting from '../../assest/images/Online Consulting.png';
import Vaccination from '../../assest/images/Covid Vaccination.png';
import Reports from '../../assest/images/Lab Reports.png';
import Topbar from '../ui/topbar/Topbar';

function Main() {
  return (
    <div>
        {/* <Topbar/> */}
            <div>
                    <h3 className="heading">What Would You Like to Book Today?</h3>
            </div>


            <div id='card-main-1'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" id="card-main">
                        <div class="card h-100 card-1" id="border">
                        <img src={Consulting} class="card-img-top" alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">ONLINE CONSULTING</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-2" id="border">
                        <img src={Vaccination} class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">VACCINATION</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-3" id="border">
                        <img src={Reports} class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">LAB REPORTS</h5>
                        </div> 
                        </div>
                    </div>
                </div>




            </div>
   

    </div>            

  )
}

export default Main