import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../redux/actions/articleActions";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import ArticlesList from "./ArticlesList";
import ArticlesForm from "./ArticlesForm";

export function ArticlesPage({ articles, loadArticles, saveArticle}) {
    const [article, setArticle] = useState({ });

    useEffect(() => {
        loadArticles();
    }, []);

    function handleSave(event) {
        event.preventDefault();
        saveArticle(article)
            .then(() => {
                toast.success("Article saved.");
            })
            .catch(error => {
                throw error;
            });
    }

    return (
        <div>
            <h1>Welcome</h1>
            <br/>
            <hr/>
            <ArticlesList articles={articles}/>
            <hr/>
            <hr/>
            <ArticlesForm article={article} onSave={handleSave}/>
        </div>
    );
}

ArticlesPage.propTypes = {
    articles: PropTypes.array.isRequired,
    loadArticles: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    console.log("State " + JSON.stringify(state.articleReducer));
    return {
        articles: Array.from(state.articleReducer)
    };
}

const mapDispatchToProps = {
    loadArticles: articleActions.loadArticles,
    saveArticle: articleActions.saveArticle
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesPage);
