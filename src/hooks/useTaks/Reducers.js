import {v4 as uuid} from "uuid";

export const Reducers = (state, action) => {
    switch (action.type) {
        case "ADD_TAsk":
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        id: uuid(),
                        title: action.payload,
                    },
                ],
            };
        default:
            return state;
    };
}