import React from 'react';
import popupComponent from '../../../shared/hoc/popupComponent'
const flightInfoComponent =(props)=>{

    return(
    <div className="parent-container pd-rl-16">
    <p className="heading">
     From {props.flightdetail.fromCity} ({props.flightdetail.fromCityCode}) to {props.flightdetail.toCity} ({props.flightdetail.toCityCode})
    </p>
    
    <div className="flight-info-container">
			<div className="fly-date-loc">
				<p className="fly-date">{props.flightdetail.departureDate}}</p>
				<p className="fly-loc">{props.flightdetail.fromCity} ({props.flightdetail.fromCityCode}) to {props.flightdetail.toCity} ({props.flightdetail.toCityCode}) </p>
			</div>
			<div className="fly-details">
				<span className="flight-info-fly-orgin">{props.flightdetail.fromCityCode}</span>
				<span className="fly-duration-flight-info">{props.flightdetail.duration}</span>
				<span className="fly-destination-flight-info">{props.flightdetail.toCityCode}</span>
			</div>
			<div className="fly-depart-arrival">
				<span className="fly-depart-flight-info">{props.flightdetail.departureTime}</span>
				<span className="fly-bus-train">
				<span className="flight-img-flight"></span>
				</span>

				<span className="flight-info-path"></span>

				
				<span className="flight-info-dot"></span>
				<span className="fly-arrival">{props.flightdetail.arrivalTime}</span>
			
				
			</div>
			<div className="fly-type">
				 {'Non-stop'}
			</div>
            
			<table className="tbl-border mb-1dot25">
			<tbody>
				<tr>
					<td rowSpan="2" >
						<img alt="" src="https://ekmobileqa.ek.aero/fr/english/CAB/IBE/getAirlineTailFin.xhtml?airlineCode=EK" className="flight-tail"/>
					
					</td>
					<td className="fly-bus-train-heading">
					{'Flight number'}	
                    </td>
					<td className="aircraft-vehicle-type">
					 {'Aircraft type'}
					</td>			
				</tr>
				<tr>
					<td className="fly-no">
						{props.flightdetail.flightNumber}</td>
					<td className="aircraft-name">{props.flightdetail.aircraftType}</td>
				</tr>
				</tbody>
			</table>
			
		</div>
		<button className="check-fare-btn" type="button">
		Check fares
		 
	    </button>
    </div>
    )
}


export default popupComponent(flightInfoComponent, false, '');