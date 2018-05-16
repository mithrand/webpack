import * as React from 'react'
import { connect } from 'react-redux'
import { IEntitiesState }  from 'state';
import { DataTableHeaderProps,DataTableHeaderConnected } from './types';
import dispatchers from 'dispatchers';
import * as classNames from 'classnames';
import {Select, MenuItem}  from 'material-ui';
import * as numeral from 'numeral';

export class DataTableHeader extends React.Component<DataTableHeaderProps & DataTableHeaderConnected, any> {
  onSelectChange= (event:any) => {
    this.props.UpdateNumPerPage(event.target.value);
  }
  render(){
    const { numPerPage } = this.props;
    return(
      <React.Fragment>
        <div className="group">
          <Select value={numPerPage} onChange={this.onSelectChange}>
            <MenuItem value={10}>10 items</MenuItem>
            <MenuItem value={50}>50 items</MenuItem>
            <MenuItem value={100}>100 items</MenuItem>
          </Select>
          <span className='results-count'>
            Showing from {numeral(0).format('0,0')} to {numeral(0).format('0,0')} &nbsp;of {numeral(0).format('0,0')} entries
          </span>
        </div>
        <div className="group">
        </div>
      </React.Fragment>
    );
  }
}

const  connector = connect(
  (state:IEntitiesState):{ entities?:{ total:number,[id:string]:any };numPerPage:number;} =>({
    numPerPage: state.numPerPage,
    entities: state.entities,
  }),
  (dispatch)=>({
    UpdateNumPerPage: (numPerPage:number): void => dispatchers.entities.UpdateNumPerPage(dispatch,numPerPage),
  }),
);

export default connector(DataTableHeader)