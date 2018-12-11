import {ONE, TWO} from "../actions";

const myReducer = (state = {name: 'lee ming'}, action) => {
    switch (action.type){

        case ONE:
            state.name = "one";
            return state;

        case TWO:
            state.name = "two";
            return state;

        default:
            state.name = "default";
            return state;

    }
};

export default myReducer;