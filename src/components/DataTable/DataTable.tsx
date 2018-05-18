import * as React from 'react'
import './styles/DataTable.scss';
import * as numeral from 'numeral';
import { connect } from 'react-redux'
import { IEntitiesState } from 'state';
import { DataTableProps,DataTableConnected } from './types';
import DataTableHeader  from './DataTableHeader';
import DataTableBody  from './DataTableBody';
import * as classNames from 'classnames';
import { TableBody } from 'material-ui';

export class DataTable extends React.Component<DataTableProps & DataTableConnected,any> {

  render () {
    return (
      <div className="data-table">
        <div className="data-table-content">
            <div className="pre-row">
              <DataTableHeader/>
            </div>
            <div>
              <DataTableBody/>
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
