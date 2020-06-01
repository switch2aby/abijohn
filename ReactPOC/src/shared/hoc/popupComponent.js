import React from 'react';
import { FormattedMessage } from 'react-intl';

const popupComponent =(WrappedComponent ,isNeedTitle , popupTitle) =>{
let headerStyle=[];
let content;
if(isNeedTitle && popupTitle !== ""){
    headerStyle.push('top-heading');
    content=(<span className="mr-33"><span><FormattedMessage id={popupTitle}/></span></span>)
}else{
    headerStyle.push('removepopupheader')
    content=(<span className="mr-33"><span></span></span>)
}





   

    return (props)=> (
        <div className="popup">
        <div className={headerStyle}>
        {content}
        <span onClick={()=>props.showPopup('sector')} className="popup-cross-button" id="popup-close"></span>
        </div>
        <WrappedComponent {...props}/>
       </div>
    )
}

export default popupComponent;