import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
    width: "10%",
    height: "10%"
};

const ArticlesList = ({ articles }) => (
    <table className="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th />
        </tr>
        </thead>
        <tbody>
        {articles.map(article => {
            return (
                <tr key={article.id}>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>
                        <img src={article.image} alt="Logo" style={imgStyle} />
                    </td>
                </tr>
            );
        })}
        </tbody>
    </table>
);

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default ArticlesList;
