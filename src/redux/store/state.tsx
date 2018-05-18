import { ISection } from "globals/SectionsConfig";

export interface IEntitiesState {
  IsFetching:boolean;
  selectedEntity?:string;
  sectionConfig?: ISection;
  fetchError:boolean;
  entities?:{total:number,[id:string]:any};
  numPerPage:number;
}

export const initialState:IEntitiesState = {
  IsFetching:false,
  selectedEntity:null,
  sectionConfig:null,
  fetchError:false,
  entities:null,
  numPerPage:10,
}