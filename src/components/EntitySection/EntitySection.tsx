import * as React from 'react';
import { EntitySectionProps, EntitySectionConnection } from './types';
import Loading from 'components/Loading'
import { connect } from 'react-redux'
import dispatchers from 'dispatchers';

class EntitiesSection extends React.Component<EntitySectionProps & EntitySectionConnection, any> {

  componentWillMount () {
    const {entityType} = this.props;
    this.props.fetchEntities(entityType)
  }

  componentWillReceiveProps (newProps:EntitySectionProps) {
    if (this.props.entityType !== newProps.entityType) {
      const {entityType} = this.props;
      this.props.fetchEntities(entityType)
    }
  }

  render () {
    return (
      <div className='container'>
        <p>Entities section</p>
      </div>
    );
  }
}


export default connect(
  (state:any) => state,
  (dispatch) =>({
    fetchEntities: (entityType:string)=> dispatchers.entities.FetchEntities(dispatch,entityType)
  }),
)(EntitiesSection) as React.ComponentClass<EntitySectionProps>;


/*
const mapStateToProps = (state) => {
  return ({
    isFetchingEntities: state.entities.isFetchingEntities,
    entries: state.entities.entries,
    isFetchingEntity: state.entities.isFetchingEntity,
    selectedEntity: state.entities.selectedEntity,
    page: state.entities.page,
    pageSize: state.entities.pageSize,
    total: state.entities.total
  })

  const mapDispatchToProps = {
  fetchEntities,
  selectEntity,
  setPageSize,
  getPage
}
}

*/

