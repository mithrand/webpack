import * as React from 'react'
import './styles/DataTable.scss';
import * as numeral from 'numeral';
import { connect } from 'react-redux'
import { DataTableProps,DataTableConnected } from './types';
import DataTableSizeSelector  from './DataTableSizeSelector';
import * as classNames from 'classnames';

export class DataTable extends React.Component<DataTableProps & DataTableConnected,any> {

  render () {
    return (
      <div className="data-table">
        <div className="data-table-content">
            <div className="pre-row">
              <div className="group">
                <DataTableSizeSelector/>
              </div>
              <div className="group">
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state:any) => ({}),
  (dispatch) =>({}),
)(DataTable);
