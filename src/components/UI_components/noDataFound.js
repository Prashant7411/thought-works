import React from 'react'
import notDataFound from '../../images/noDatafound.gif'

export const Nodatafound = () => {
  return (
    <div className="row">
      <div className="col s12">
      <div className="error__heading">NO DATA FOUND FOR THE SELECTED COMBINATION</div>
        <div className="no__data__found__img__container">
          <img src={notDataFound} alt="error"/>
        </div>
      </div>
    </div>
  )
}
