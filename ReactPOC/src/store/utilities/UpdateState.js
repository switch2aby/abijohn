
export const updateState = (state , updatedValue)=>{
    return{
        ...state,
        ...updatedValue
    }
};