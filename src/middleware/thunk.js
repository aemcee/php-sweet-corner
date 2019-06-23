export default store => next => action => {
    if(typeof action !== 'function'){
        return next(action); 
    }

    return action(store.dispatch);
}

// this is the breakdown of the above
// function thunk(store){
//     return function(next){
//         return function(action){
//             // Code goes here
//         }
//     }
// }