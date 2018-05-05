import * as React from 'react'
import { connect } from 'react-redux'
import { DataTableSizeSelectorConnected } from './types';
import * as classNames from 'classnames';

export const DataTableSizeSelector = (props:DataTableSizeSelectorConnected) => {
  return(
    <select defaultValue={this.props.numPerPage} className='pageSize'>
      <option value='10'>10 items</option>
      <option value='25'>25 items</option>
      <option value='50'>50 items</option>
    </select>
  );
}

export default connect(
  (state)=>({

  }),
  (dispacher)=>({

  }),
)(DataTableSizeSelector);