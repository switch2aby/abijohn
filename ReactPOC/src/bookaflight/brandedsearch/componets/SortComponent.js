import React from 'react';
import popupComponent from '../../../shared/hoc/popupComponent'
import { FormattedMessage } from 'react-intl';
const sortComponent =(props)=>{
    return (
        <div className="sortcontainer">
          <div className="filter-and-sort-heading-outer">
            <p className="filter-and-sort-heading-title"><FormattedMessage id="label_popup_sortby"/></p>
          </div>
        </div>
    )
}

export default popupComponent(sortComponent, true, 'label_sort_heading');
