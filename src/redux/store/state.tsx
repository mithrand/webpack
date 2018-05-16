export interface IEntitiesState {
  IsFetching:boolean;
  selectedEntity?:string;
  fetchError:boolean;
  entities?:{total:number,[id:string]:any};
  numPerPage:number;
}

export const initialState:IEntitiesState = {
  IsFetching:false,
  selectedEntity:null,
  fetchError:false,
  entities:null,
  numPerPage:10,
}