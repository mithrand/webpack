import { CreateReducer } from './utils';
import { Actions, ActionsTypes } from '../actions';


export interface IEntitiesState {
  IsFetching:boolean;
  selectedEntity?:string;
  fetchError:boolean;
}

const initialState:IEntitiesState = {
  IsFetching:false,
  selectedEntity:null,
  fetchError:false,
}

const reducer = CreateReducer(initialState, {
  [ActionsTypes.Entities.ENTITY_FETCHING]: (state:IEntitiesState, action:any ):IEntitiesState => {
    const {entityType} = action.payload;
    return {...state, IsFetching:true, selectedEntity: action.payload.entityType}
  },
  [ActionsTypes.Entities.ENTITY_FETCHED]: (state:IEntitiesState, action:any ):IEntitiesState => {
    const {entityType} = action.payload;
    return {...state, IsFetching:false, fetchError:false, selectedEntity: entityType}
  },
  [ActionsTypes.Entities.ENTITY_FETCH_ERROR]: (state:IEntitiesState, action:any ):IEntitiesState => {
    const {entityType} = action.payload;
    return {...state, IsFetching:false, fetchError:true,selectedEntity: entityType};
  },
});

export default reducer;