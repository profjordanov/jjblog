import * as ActionTypes from "./actionTypes";
import * as articleApi from "../../api/articlesService";

export function loadArticlesSuccess(articles) {
    console.log("Action " + JSON.stringify(articles));
    console.log(typeof articles);
    return { type: ActionTypes.LOAD_ARTICLES_SUCCESS, articles };
}

export function createArticlesSuccess(article) {
    return { type: ActionTypes.CREATE_ARTICLE_SUCCESS, article };
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

export function saveArticle(article) {
    return function(dispatch) {
        return articleApi
            .save(article)
            .then(savedArticle =>{
                dispatch(createArticlesSuccess(savedArticle));
            })
            .catch(error => {
                throw error;
            });
    }
}
