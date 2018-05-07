import axios from 'axios';
import { Dispatch } from 'react-redux';
import  actions from '../actions';
import api from 'api';

export function FetchEntities(dispatch: Dispatch<any>, entityType:string){
  dispatch(actions.Entities.ENTITY_FETCHING(entityType));
  axios(api.entities.getEntity(entityType))
  .then(res => {
    console.log(res.data);
    dispatch(actions.Entities.ENTITY_FETCHED(entityType,res.data));
  })
  .catch(error => {
    console.log(error.data);
    dispatch(actions.Entities.ENTITY_FETCH_ERROR(entityType));
  });
}

export function UpdateNumPerPage(dispatch: Dispatch<any>, numPerPage:number){
  dispatch(actions.Entities.UPDATE_NUM_PER_PAGE(numPerPage));
}