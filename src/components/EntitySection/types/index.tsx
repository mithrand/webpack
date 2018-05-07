import { ISection } from 'globals/SectionsConfig';

export interface EntitySectionProps extends ISection { }

export interface EntityHeaderProps extends ISection { }

export interface EntityHeaderConnection {
  entities:{ 
    total:number;
    [id:string]:any
  };
  isFetching:boolean;
}

export interface EntitySectionConnection{
  isFetching: boolean,
  selectedEntity: string,
  numPerPage:number,
  fetchEntities(entityType:string):void;
}