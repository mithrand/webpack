import * as React from 'react';
import {EntityHeaderProps, EntityHeaderConnection} from './types';
import { connect } from 'react-redux'

export const EntityHeader = (props:EntityHeaderProps & EntityHeaderConnection) => {
  const {icon,title, entities, isFetching} = props;
  return(
    <React.Fragment>
      <div className='card-content'>
        <div className='card-title'>
          <span className={`icon icon-${icon}`} />
          {title}
        </div>
      </div>
      <div className='card-summary'>
        <span className='summary-value'>
        { 
          !isFetching ? (
            <React.Fragment>
                <span className='summary-value-number'>{ entities && entities.total}</span>
                <span className='summary-value-label'>found</span>
            </React.Fragment>
          ):(
            <React.Fragment>
                <span className='summary-value-number'>-</span>
                <span className='summary-value-label'>Loading</span>
            </React.Fragment>
          ) 
        }

        </span>
      </div>
    </React.Fragment>
  );
};

export default connect((state:any)=>({
  entities:state.entities,
  isFetching:state.isFetching,
}))(EntityHeader);
