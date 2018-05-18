import * as React from 'react'
import { connect } from 'react-redux'
import { IEntitiesState }  from 'state';
import {DataTableBodyProps, DataTableBodyConnected} from './types';
import sectionsConfig from 'globals/SectionsConfig';

class DataTableBody extends React.Component< DataTableBodyProps & DataTableBodyConnected, any> {
  onHeaderClick = (key:string) => {
  }
  renderRows = () => {
    const { sectionConfig, entities } = this.props;
    if(!sectionConfig || !entities ){ return null; }

    const data = entities[sectionConfig.apiCollectionName];
    const columns = sectionConfig.columns;
    
    return(
      data.map((d:{[id:string]:any},idx:number) => (
        <tr key={idx}>
        {
          columns.map((col,idy) => {
            const value = d[col.key];
            if(value){
              return(<td key={idy}>{value}</td>);
            }
          })
        }
        </tr>
      ))
    );
  }

  renderHeadings = () => {
    const { sectionConfig } = this.props;
    if(!sectionConfig){ return null; }
    
    return (
      <tr>
      {
        this.props.sectionConfig.columns.map((col, idx) => (<th key={idx} onClick={()=> this.onHeaderClick(col.key)}>{col.caption}</th>))
      }
      </tr>
    );
  }
    

  render(){
    const { entities, selectedEntity } = this.props;

    const selectSection = sectionsConfig.find(sec => sec.entityType === selectedEntity );
    if(!selectSection){
      return(
        <h5 className='empty-datatable'>Error section is not configured!!</h5>
      );
    }
    const data = entities && entities[selectSection.apiCollectionName];
  
    if(!data || data.length == 0) {
      return(<h5 className='empty-datatable'>No results found</h5>);
    }
  
    return(
      <table>
        <thead>
          {this.renderHeadings()}
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

export default connect<DataTableBodyConnected>(
  (state:IEntitiesState, props) => ({
    entities: state.entities || null,
    selectedEntity: state.selectedEntity,
    sectionConfig: state.sectionConfig,
  }),
  (dispatch)=>({}),
)(DataTableBody);