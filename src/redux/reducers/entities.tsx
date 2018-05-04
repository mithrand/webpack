import { CreateReducer } from './utils';
import { Actions, ActionsTypes } from '../actions';


export interface IEntitiesState {
  IsFetching:boolean;
  selectedEntity?:string;
  fetchError:boolean;
  entities?:{total:number,[id:string]:any};
}

const initialState:IEntitiesState = {
  IsFetching:false,
  selectedEntity:null,
  fetchError:false,
  entities:null,
}

const reducer = CreateReducer(initialState, {
  [ActionsTypes.Entities.ENTITY_FETCHING]: (state:IEntitiesState, action:{payload:{entityType:string}} ):IEntitiesState => {
    const {entityType} = action.payload;
    return {...state, IsFetching:true, selectedEntity: action.payload.entityType, entities:null}
  },
  [ActionsTypes.Entities.ENTITY_FETCHED]: (state:IEntitiesState, action:{payload:{entityType:string,entities:any}}):IEntitiesState => {
    const {entityType, entities} = action.payload;
    return {  
      ...state,
      IsFetching:false,
      fetchError:false,
      selectedEntity: entityType,
      entities:entities,
    };
  },
  [ActionsTypes.Entities.ENTITY_FETCH_ERROR]: (state:IEntitiesState, action:any):IEntitiesState => {
    return {...state, IsFetching:false, fetchError:true, entities:null};
  },
});

export default reducer;