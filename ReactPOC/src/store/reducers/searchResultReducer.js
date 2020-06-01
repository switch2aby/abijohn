
import * as actionTypes from '../actions'
import {currenstate} from '../currentState'
import {updateState} from '../utilities/UpdateState'

const searchResultReducer = (state=currenstate , action )=>{
  switch (action.type) {
  
    //action type matches update state with   new state 
    case actionTypes.OUTBOUNDFLIGHTS: return updateState(state,{flightResults:state.flightResults = action.response});
           
    case actionTypes.OPENPOPUP: return updateState(state ,{page:state.page=action.popup});
    
    case actionTypes.SERVICECALLFAILEDINSEARCHRESULTS :return updateState(state,{error:state.error=action.error});
    // action type doesn’t match no changes to be done returns the currenstate
    default: return state
}
 
}

export default searchResultReducer;