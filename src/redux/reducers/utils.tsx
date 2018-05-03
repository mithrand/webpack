/**
 * Copied and reused form redux-immutablejs
 */
export function CreateReducer(initialState:any, handlers:any) {
  return (state = initialState, action:any) => {
      const handler = (action && action.type) ? handlers[action.type] : undefined;

      if (!handler) {
          return state;
      }

      return handler(state, action);
  };
}

export default CreateReducer;