import * as ActionTypes from "../actions/actionTypes";
import initialState from "../initialState";

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_ARTICLES_SUCCESS:{
            console.log("Reducer" + JSON.stringify(action.articles));
            return action.articles;
        }
        case ActionTypes.CREATE_ARTICLE_SUCCESS:{
            return [...state, { ...action.article }];
        }
        default:
            return state;
    }
}
