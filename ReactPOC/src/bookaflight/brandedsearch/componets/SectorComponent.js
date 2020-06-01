import React from 'react';
import FlightComponent from '../componets/FlightComponent'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
const sectorComponent = (props)=>{
   /**
    *   applying ccss for showing plain icon based on OB IB result flags
    *   assigning sector message based on OB IB result flags 
    */

   const planceIcon = [];
   let sectorMessage =null;
   let sectorDate = "";

   if(props.flightResults.outBoundResultsFlag){
       sectorMessage = <FormattedMessage id="label_searchresult_OUTBOUND"
       defaultMessage=""
       description=""
       />

       sectorDate = props.flightResults.outBoundDate;
       planceIcon.push('planeicon');
      
   }else{
       sectorMessage= "SELECT INBOUND FLIGHTS"
       planceIcon.push('planeiconinbound')
       sectorDate = props.flightResults.inBoundDate
   }

   /**
    * overridden AirportIndicator
    */
    /* let overriddenAirportIndicatorMessage;
    if(props.flightResults.overriddenAirportIndicator){
        overriddenAirportIndicatorMessage=(
           <div className="warning-container-sector-component">
             <p className="content-sector-component">{'Overriden Airport'} </p>
           </div>
        );
    } */

    /* let cctenUpgradeMessage ;
    if(props.flightResults.ccTenlegUpgradeAvailble){
        cctenUpgradeMessage = (
       <div className="warning-cc10-container-sector-component">
       <span className="cc10-warning-icon"></span>
       <span className="content-sector-component">{props.cctenUpgradeMessage} </span>
       </div>)
    }

    let cugoMessage ;
    if(props.flightResults.cugoCode){
        cugoMessage= (<div className="cugo-container">
         <div className="cugo-title-container">
           if(props.flightResults.cugoTickShown){
              <div className="cugo-icon" ></div>
           }
             { 'PromoationCode' - props.flightResults.cugoCode}
        </div>
          if(props.flightResults.cugoTickShown){
          <p className="cugo-msg" >{props.flightResults.scugoImage}</p>
          }
       </div>)
   } */
   
   let showSortingInformations;
       if(props.flightResults.totalFlightOptionsCount > 2){
        showSortingInformations =(
            <div onClick={()=>props.showPopup("sort")} className="filter-container">
        <div className="filter-icon"></div>
      <div className="filter-container-inner">
       
        {'Sort By'}
        <span className="hightlited">
            {'Recommended'}
          </span>
      </div>
      </div>
        )
       }
  
   
   return(<div className="search-result-header bkg-img-Y">
  
    <div className={planceIcon.join(' ')}>
    
    </div>
            <div className="select-flight">
                <p> {sectorMessage}</p>
            </div>
                <p className="header-title">
                     <FormattedHTMLMessage 
                      id="label_searchresults_flightModal_flightSection_header"
                      defaultMessage=""
                      values={{ FRMCITYNAME: props.flightResults.fromCity,
                                TOCITYNAME:props.flightResults.toCity
                              }}
                     />
                    
                     ({props.flightResults.totalFlightOptionsCount} 
                                 {props.getOptionText()}
                     )
               </p>
   <div className="actual-date">
         {sectorDate}
   </div>
    
   {showSortingInformations}
   
   {props.flightResults.flightOptionDetails.map((flight,index)=>{
      return <FlightComponent showFlightInfo={props.openFlightInfo} key={flight.optionId} 
      openBrandDetails={props.openBrandDetails.bind(index,'fareOption', true)} 
      flightoption={flight} selected={0} index={index}
      ></FlightComponent>

  })}

   </div>
  
);


   
}

export default sectorComponent;