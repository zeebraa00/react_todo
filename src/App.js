import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리', checked: false },
      { id: 1, text: ' 리액', checked: true },
      { id: 2, text: ' 리액트', checked: false }
    ]
  }

  handleChange = (e) => {
    console.log('형 힘내세요')
    console.log(e);
    this.setState({
    // input 의 다음 바뀔 값(value) 상태 업데이트
      input: e.target.value 
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    // 전개 연산자를 이용해서 배열 복사하기
    const nextTodos = [...todos];

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;


// todo 객체들을 구분하기 위하여 우리는 id 값을 지정해줄건데요
// 데이터가 추가 될 때마다 this.id 값이 1씩 올라가도록 설정하겠습니다.
// 우선 Form 컴포넌트에서 필요한 기능들이 뭔지 알아봅시다.

// 텍스트 내용 바뀌면 state 업데이트
// 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
// 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기