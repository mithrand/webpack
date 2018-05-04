import { CreateAction} from './utils';

export const EntitiesActionsTypes = {
    ENTITY_FETCHING:'ENTITY_FETCHING',
    ENTITY_FETCHED:'ENTITY_FETCHED',
    ENTITY_FETCH_ERROR:'ENTITY_FETCH_ERROR',
}

export const EntitiesActions:{[id:string]:any} = {
    [EntitiesActionsTypes.ENTITY_FETCHING]: (entityType:string) => CreateAction(EntitiesActionsTypes.ENTITY_FETCHING,{entityType}),
    [EntitiesActionsTypes.ENTITY_FETCHED]: (entityType:string, entities:any[]) => CreateAction(EntitiesActionsTypes.ENTITY_FETCHED,{entityType,entities}),
    [EntitiesActionsTypes.ENTITY_FETCH_ERROR]: (entityType:string) => CreateAction(EntitiesActionsTypes.ENTITY_FETCH_ERROR,{entityType})
};

export default EntitiesActions;