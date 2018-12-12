import {ONE, TWO} from "../actions";

const myReducer = (state = {name: 'lee ming'}, action) => {
    switch (action.type){

        case ONE:
            alert("one");
            state.name = action.data;
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