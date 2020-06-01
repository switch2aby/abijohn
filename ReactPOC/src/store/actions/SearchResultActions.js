import * as actionTypes from '../actions'
import * as restEndPoints from '../../constants/rest-endpoints'
import {get} from '../../shared/utility/AjaxUtility';


export const loadOutboundFlightsAction = ()=>{
    return dispatch =>{
           get(restEndPoints.OUTBOUNDRESTENDPOINT).then(
            response =>{
              dispatch(setOutboundDetails(response.data));
            }
        ).catch(
            error=>{
              dispatch(updateExceptionState(error));
            }
        )
    }
}

export const setOutboundDetails = (response)=>{
    return{
        type:actionTypes.OUTBOUNDFLIGHTS,
        response:response
     }
}

export const updateExceptionState = (error)=>{
    return{
        type:actionTypes.SERVICECALLFAILEDINSEARCHRESULTS,
        error:error
     }
}

export const openPopupAction = (popupName)=>{
    console.log(popupName);
     return{
        type:actionTypes.OPENPOPUP,
        popup:popupName
    } 
   
}

