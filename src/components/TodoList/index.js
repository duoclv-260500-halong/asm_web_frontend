import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Index = ({ todoList }) => {
    return (
        todoList.map((item, index) => {
            return (
              <TodoItem key={index} id={index} value={item} />
            )
          })
    )
   
};

Index.propTypes = {
  todoList: PropTypes.array,
};
Index.defaultProps = {
  todoList: [],
};

export default Index;
