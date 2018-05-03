import * as React from 'react';
import { EntitySectionProps } from './types';
import Loading from 'components/Loading'
import { connect } from 'react-redux'
import actions from 'actions';

class EntitiesSection extends React.Component<EntitySectionProps, any> {
  props:EntitySectionProps;
  constructor (props:EntitySectionProps) {
    super(props);
  }

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

const connector =  connect(
  (state:any) => state,
  (dispatch) =>({
    fetchEntities(entityType:string){
      dispatch(actions.Entities.FETCH_ENTITY(entityType));
    },
  }),
)(EntitiesSection);


export default connector;

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

