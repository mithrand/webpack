export interface EntitySectionProps{
  entityType:string;
}

export interface EntitySectionConnection{
  fetchEntities(entityType:string):void;
}