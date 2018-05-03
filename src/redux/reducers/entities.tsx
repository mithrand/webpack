import { CreateReducer } from './utils';
import { Actions, ActionsTypes } from '../actions';


export interface IEntitiesState {
  IsFetching:boolean;
  selectedEntity?:string;
}

const initialState:IEntitiesState = {
  IsFetching:false,
  selectedEntity:null
}

const reducer = CreateReducer(initialState, {
  [ActionsTypes.Entities.FETCH_ENTITY]: (state:IEntitiesState, action:any ):IEntitiesState => ({...state, IsFetching:true, selectedEntity: action.payload.entityType}),
});

export default reducer;