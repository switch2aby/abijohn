
import * as actionTypes from '../actions'
import {currenstate} from '../currentState'
import {updateState} from '../utilities/UpdateState'

const languageContentReducer = (state=currenstate , action )=>{
  switch (action.type) {
  
    //action type matches update state with   new state 
    case actionTypes.LANGUAGECONTENT:
         return updateState(state,{locale:state.locale =action.response.locale ,
                            contents:state.contents = action.response.tridResource.searchByPriceResults});
           
    case actionTypes.SERVICECALLFAILEDINLANGUAGECONTENT :return updateState(state,{error:state.error=action.error});
    // action type doesn’t match no changes to be done returns the currenstate
    default: return state
}

}

export default languageContentReducer;