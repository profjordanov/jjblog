import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const ArticlesForm = ({
                        article,
                        onSave,
                        errors = {}
                    }) => {
    return (
        <form onSubmit={onSave}>
            <h2>Article</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="title"
                label="Title"
                value={article.title}
                error={errors.title}
            />

            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
};

ArticlesForm.propTypes = {
    article: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
};

export default ArticlesForm;
