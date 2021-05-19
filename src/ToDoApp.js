import React from 'react';
import ReactDOM from 'react-dom';
import ToDoTitle from './ToDoTitle.js';
import ToDoAddForm from './ToDoAddForm.js';
import ToDoList from './ToDoList.js';
import './done.css';

var todoItems = [];
todoItems.push({index: 2, value: "Learn Java Script", done: true});
todoItems.push({index: 3, value: "Learn Jquery", done: true});
todoItems.push({index: 1, value: "Learn React", done: false});

class ToDoApp extends React.Component {
constructor (props) {
		super(props);
		this.state = { todoItems: todoItems };
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.TodoDone = this.TodoDone.bind(this);
	} 
	addItem(todoItem) {
		todoItems.unshift({
			index: todoItems.length+1, 
			value: todoItem.newItemValue, 
			done: false
		});
		this.setState({todoItems: todoItems});
	}
	removeItem (itemIndex) {
		todoItems.splice(itemIndex, 1);
		this.setState({todoItems: todoItems});
	}
	TodoDone(itemIndex) {
		var todo = todoItems[itemIndex];
		todoItems.splice(itemIndex, 1);
		todo.done = !todo.done;
		todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
		this.setState({todoItems: todoItems});
	}
	render() {
		return (
			<div id="main"> 
				<ToDoTitle />
				<ToDoAddForm addItem={this.addItem} />
				<ToDoList items={this.props.initItems} removeItem={this.removeItem} TodoDone={this.TodoDone}/>
			</div>
		);
	}
}
export default ToDoApp

ReactDOM.render(<ToDoApp initItems={todoItems}/>, document.getElementById('root'));
