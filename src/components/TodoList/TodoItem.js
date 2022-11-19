import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({id, value}) => {
    return (
            <li key={id}>{value}</li>
    );
};
TodoItem.propTypes = {
    id: PropTypes.any.isRequired,
    value: PropTypes.string
};

TodoItem.defaultProps = {
    id: 0,
    value: "default"
}

export default TodoItem;
