import * as React from 'react';
import { connect } from 'react-redux'
import dispatchers from 'dispatchers';
import * as classNames from 'classnames';
import { EntitySectionProps, EntitySectionConnection } from './types';
import Loading from 'components/Loading'
import EntityHeader from './EntityHeader'
import DataTable from 'components/DataTable';

class EntitiesSection extends React.Component<EntitySectionProps & EntitySectionConnection, any> {
  forceFetch:boolean = false;
  componentWillMount () {
    const {entityType} = this.props;
    this.props.fetchEntities(entityType)
    this.forceFetch = true;
  }

  componentWillReceiveProps (newProps:EntitySectionProps) {
    if (this.props.entityType !== newProps.entityType) {
      this.props.fetchEntities(newProps.entityType)
      this.forceFetch = true;
    } else {
      this.forceFetch = false;
    }
  }

  render () {
    const { isFetching, selectedEntity} = this.props;

    const cardClasses = classNames({
      'card':true,
      'entities-table':true,
      [selectedEntity]:true,
    });

    return (
      <div className='container'>
        { isFetching || this.forceFetch ? 
        (
          <Loading show={true} local={true}/>
        ):(
          <div className={cardClasses}>
            <EntityHeader {...this.props}/>
            <DataTable/>
          </div>
        )
        }
      </div>
    );
  }
}


export default connect(
  (state:any) => ({
    isFetching:state.IsFetching,
    selectedEntity:state.selectedEntity,
    numPerPage: state.numPerPage,
  }),
  (dispatch) =>({
    fetchEntities: (entityType:string)=> dispatchers.entities.FetchEntities(dispatch,entityType)
  }),
)(EntitiesSection)