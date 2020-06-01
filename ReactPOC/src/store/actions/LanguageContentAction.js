import * as actionTypes from '../actions'
import * as restEndPoints from '../../constants/rest-endpoints'
import {get} from '../../shared/utility/AjaxUtility';


export const loadLanguageContentAction = ()=>{
    return dispatch =>{
        get(restEndPoints.LANGUAGECONTENTRESTENDPOINT).then(
            response =>{
              dispatch(setLanguageContent(response.data));
            }
        ).catch(
            error=>{
              dispatch(updateExceptionState(error));
            }
        )
    }
}

export const setLanguageContent = (response)=>{
    return{
        type:actionTypes.LANGUAGECONTENT,
        response:response
     }
}

export const updateExceptionState = (error)=>{
    return{
        type:actionTypes.SERVICECALLFAILEDINLANGUAGECONTENT,
        error:error
     }
}

