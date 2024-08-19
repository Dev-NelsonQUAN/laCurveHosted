// // customMiddleware.js
// const asyncMiddleware = store => next => action => {
//     if (typeof action === 'function') {
//         // It's a thunk (async action)
//         return action(store.dispatch, store.getState);
//     }

//     // It's a regular action
//     return next(action);
// };

// export default asyncMiddleware;
