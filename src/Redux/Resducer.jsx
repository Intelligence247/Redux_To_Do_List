import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./Action";

const taskArr = [
    {
        id: 1,
        taskName: "Name of Task",
        startTime: "9:00",
        endTime: "10:20",
        description: "Is Abdullahi babatunde",
        isComplete: false,
    }
]

export const todoReducer = (state=taskArr, action)=> {
    switch (action.type)
    {
        case ADD_TASK:
            return [...state, action.payload]

        case DELETE_TASK:
        const taskDelete = state.filter((e)=> e.id !== action.payload)
        return taskDelete;
        
        case COMPLETE_TASK:
           let completeTask = [];
            state.map((item) => {
                if (item.id === action.payload){
                    item.isComplete = !item.isComplete;
                }
                completeTask.push(item)
            });
            return completeTask;
            
             default:
            return state
    }
}