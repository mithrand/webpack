import { CreateAction} from './utils';

export const EntitiesActionsTypes = {
    FETCH_ENTITY:'FETCH_ENTITY',
}

export const EntitiesActions = {
    [EntitiesActionsTypes.FETCH_ENTITY]: (entityType:string) => CreateAction(EntitiesActionsTypes.FETCH_ENTITY,{entityType})
};

export default EntitiesActions;