import * as ActionTypes from "./actionTypes";
import * as articleApi from "../../api/articlesService";

export function loadArticlesSuccess(articles) {
    console.log("Action " + JSON.stringify(articles));
    console.log(typeof articles);
    return { type: ActionTypes.LOAD_ARTICLES_SUCCESS, articles };
}

export function loadArticles() {
    return function(dispatch) {
        return articleApi
            .get()
            .then(articles  => {
                dispatch(loadArticlesSuccess(articles));
            })
            .catch(error => {
                console.error("Error article action.")
                throw error;
            });
    };
}
