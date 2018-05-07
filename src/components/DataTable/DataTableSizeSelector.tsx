import * as React from 'react'
import { connect } from 'react-redux'
import { DataTableSizeSelectorProps,DataTableSizeSelectorConnected } from './types';
import dispatchers from 'dispatchers';
import * as classNames from 'classnames';

export const DataTableSizeSelector = (props:DataTableSizeSelectorProps & DataTableSizeSelectorConnected) => {
  const { numPerPage } = props;
  const onSelectChange= (event:any) => {
    props.UpdateNumPerPage(event.target.value)
  }
  
  return(
    <select defaultValue={numPerPage.toString()} onChange={onSelectChange} className='pageSize'>
      <option value='10'>10 items</option>
      <option value='25'>25 items</option>
      <option value='50'>50 items</option>
    </select>
  );
}

export default connect(
  (state:any)=>({
    numPerPage: state.numPerPage
  }),
  (dispatch)=>({
    UpdateNumPerPage: (numPerPage:number)=> dispatchers.entities.UpdateNumPerPage(dispatch,numPerPage),
  }),
)(DataTableSizeSelector);