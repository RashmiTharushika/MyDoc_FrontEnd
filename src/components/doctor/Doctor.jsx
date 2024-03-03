import React from 'react'
import './doctor.css'

function Doctor() {


  return (
    <div>



            <div>
                    <h3 className="heading">What Would You Like to Book Today?</h3>
            </div>

{/* **************/}


<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">

    <div class="carousel-item active">
            <div className='card-main-1'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-1" id="border">
                        <img src='' class="card-img-top" alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">ONLINE CONSULTING</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-2" id="border">
                        <img src=''class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">VACCINATION</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-3" id="border">
                        <img src='' class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">LAB REPORTS</h5>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div class="carousel-item">
      <div className='card-main-1'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-1" id="border">
                        <img src='' class="card-img-top" alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">ONLINE CONSULTING</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-2" id="border">
                        <img src=''class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">VACCINATION</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-3" id="border">
                        <img src='' class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">LAB REPORTS</h5>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div class="carousel-item">
      <div className='card-main-1'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-1" id="border">
                        <img src='' class="card-img-top" alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">ONLINE CONSULTING</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-2" id="border">
                        <img src=''class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">VACCINATION</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col" id='card-main'>
                        <div class="card h-100 card-3" id="border">
                        <img src='' class="card-img-top " alt="..." id="cardimg"/>
                        <div class="card-body">
                            <h5 class="card-title" id="maintitle">LAB REPORTS</h5>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Doctor