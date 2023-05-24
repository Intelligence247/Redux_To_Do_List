// export const increase = () =>{
//     return{
//         type: "INCREMENT"
//     };
// };

// export const decrease = () =>{
//     return {
//         type: "DECREMENT"
//     };
// };

// export const reset = () =>{
//     return {
//         type: "RESET"
//     }
// }

// export const addtwo = () => {
//     return{
//          type: "ADD2"
//     }
// }

export const ADD_TASK_NAME = "ADD_TASK_NAME"
export const ADD_DESC = "ADD_DESC"
export const ADD_STAT_TIME = "ADDSTATTIME"
export const ADD_END_TIME = "ADD_END_TIME"
export const DELETE_TASK = "DELETE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"

export const addTask = (task) => ({
    type: ADD_TASK_NAME,
    payload: task,
})

export const deleteTask = (taskId) =>({
    type: DELETE_TASK,
    payload: taskId,
}) 
export const completeTask = (taskId) => ({
    type: COMPLETE_TASK,
    payload: taskId,
})