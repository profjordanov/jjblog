import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../redux/actions/articleActions";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import ArticlesList from "./ArticlesList";

export function ArticlesPage({ articles, loadArticles}) {

    useEffect(() => {
        loadArticles();
    }, []);


    return (
        //<p>Test</p>
        <ArticlesList articles={articles}/>
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
    loadArticles: articleActions.loadArticles
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesPage);
