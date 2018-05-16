import * as React from 'react'
import { connect } from 'react-redux'
import { IEntitiesState }  from 'state';
import {DataTableBodyProps, DataTableBodyConnected} from './types';
import sectionsConfig from 'globals/SectionsConfig';

const DataTableBody = (props: DataTableBodyProps & DataTableBodyConnected) => {
  const { entities, selectedEntity } = props;

  const selectSection = sectionsConfig.find(sec => sec.entityType === selectedEntity );
  if(!selectSection){
    return(
      <h5 className='empty-datatable'>Error section is not configured!!</h5>
    );
  }
  const data = entities && entities[selectSection.apiCollectionName];

  if(!data || data.length == 0) {
    return(
      <h5 className='empty-datatable'>No results found</h5>
    );
  }

  return(
    <table>
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
}


export default connect(
  (state:IEntitiesState) => ({
    entities: state.entities,
    selectedEntity: state.selectedEntity,
  }),
  (dispatch)=>({}),
)(DataTableBody);