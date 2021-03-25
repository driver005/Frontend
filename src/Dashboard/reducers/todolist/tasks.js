// tasks Reducer

const taskReducerDefaultState = []

const taskReducer = (tasks = taskReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [...tasks, action.payload];
    case 'SET_TASKS':
      return action.payload;
    case 'SET_TO_COMPLETE':
      return tasks.map((task) => (task._id === action.payload._id ? action.payload : task));
    case 'SET_TO_UNCOMPLETED':
      return tasks.map((task) => (task._id === action.payload._id ? action.payload : task));
    case 'EDIT_TASK':
      return tasks.map((task) => (task._id === action.payload._id ? action.payload : task));
    case 'DELETE_TASK':
      return tasks.filter((task) => task._id !== action.payload);
    case 'DELETE_ALL':
      return  taskReducerDefaultState
    default:
      return tasks
  }
}

export default taskReducer