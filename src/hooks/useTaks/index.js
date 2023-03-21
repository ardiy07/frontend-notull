import * as React from 'react';
import {v4 as uuid} from "uuid";
import { Reducers } from './Reducers';

const initialTask = {
    todolist: [
        {
            id: uuid(),
            title: 'Todo list 1'
        },
        {
            id: uuid(),
            title: 'Todo list 2'
        }
    ],
    ongoing: [
        {
            id: uuid(),
            title: 'On Going 1'
        },
        {
            id: uuid(),
            title: 'On Going 2'
        },
        {
            id: uuid(),
            title: 'On Going 3'
        },
        {
            id: uuid(),
            title: 'On Going 4'
        },
        {
            id: uuid(),
            title: 'On Going 4'
        },
        {
            id: uuid(),
            title: 'On Going 5'
        },
        {
            id: uuid(),
            title: 'On Going 6'
        },
        {
            id: uuid(),
            title: 'On Going 7'
        },
        {
            id: uuid(),
            title: 'On Going 8'
        },

    ],
    review: [
        {
            id: uuid(),
            title: 'Review 1'
        },
        {
            id: uuid(),
            title: 'Review 2'
        }
    ],
    completed: [
        {
            id: uuid(),
            title: 'Completed 1'
        },
        {
            id: uuid(),
            title: 'Completed 2'
        }
    ]
};

const TaskContext = React.createContext({});

export const TaskProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(Reducers, initialTask);

    const addTask = (newTask) => {
        dispatch({type: 'ADD_TASK', payload: newTask});
    }

    return <TaskContext.Provider value={{ state, addTask }} >{children}</TaskContext.Provider>
};

export const useTask = () => React.useContext(TaskContext);