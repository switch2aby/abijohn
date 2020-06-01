import React from 'react';

const flightComponent =(props)=>{
let lowestPrice ;
if(props.flightoption.isLowestPrice){
  lowestPrice =(
    <div>
    <span className="lowest-price-tool-tip">
      <p className="lowest-price-tool-tip-txt">Lowest price</p>
      <span className="lowest-price-tool-tip-shadow"></span>
</span>
</div>
  )
}



 return(
    <div className="container">
    <div className="fly-header">
      <div className="tbl-border-flight-component">
        <div>
          <div className="fly-number">
            <span>{0}{props.index+1}</span>
          
          </div>
       
          <div className="selected-flight">
              {''}
          </div >
          <div className="tailfin-img-outer">
          
          <div className="aircraft">
              <div className="aircraft-type">
                {props.flightoption.aircraftType}
              </div>
              <div className="flight-identity">
                {props.flightoption.flightNumber}
              </div>
         </div>
         <div className="tailfin-img">
         <img alt="" className="fly-header-tail" src="https://ekmobileqa.ek.aero/fr/english/CAB/IBE/getAirlineTailFin.xhtml?airlineCode=EK"/>
        </div>

          </div>
          
          <div>
   
          </div>
           
        </div>
      </div>
    </div>
    <div className="fly-details-flight-component">
      <div className="fly-orgin">{props.flightoption.fromCityCode}</div>
      <div className="fly-duration-flight-component">{props.flightoption.duration}</div>
      <div className="fly-destination-flight-component">{props.flightoption.toCityCode}</div>
    </div>
    <div className="fly-arrival-img-time">
      <div className="fly-depart-flight-component">{props.flightoption.departureTime}</div>
      <div className="fly-imag-center">
        <p className="flight-img-flight-component"></p>
        <p className="path-left"></p>
        <p className="dot"></p>
      </div>
      <span className="fly-arrival-flight-component">{props.flightoption.arrivalTime}</span>
   
    </div>
 
    <div className="fly-type-flight-component">
         {'None stop'}
    </div>



    
    <div className="flight-msg-container-flight-component">
    
    {lowestPrice}

    <div className="fly-popup-link">
        
    <div className="fly-info-link">
      <span className ="img-link">
        
      </span>
      <span onClick={()=>props.showFlightInfo(props.flightoption.optionId)} className="link-name">
         {'flight info'}
      </span>  
   
      </div>
      
      <div className="fly-price-info">
       
      <span>
      <span className="from-txt">from</span>
      <span className="currency">{ props.flightoption.currencyCode}</span>
      <span className="price">{ props.flightoption.totalFare}</span></span>
        
        </div>
    </div>
    </div>
    </div>
    
     )


}

export default flightComponent;