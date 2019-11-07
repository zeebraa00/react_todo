import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
        ({id, text, checked}) => (
          
        // TodoItem 컴포넌트가 끝까지 반복되게 할 것
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          ____________________________________
          
        )
      );

    return (
      <div>
          {todoList}
      </div>
    );
  }
}

export default TodoItemList;

// todos: todo 객체들이 들어있는 배열
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수