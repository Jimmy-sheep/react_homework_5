import React from 'react';
import ToDoListItem from './ToDoListItem.js';

class ToDoList extends React.Component {
	render () {
		var items = this.props.items.map((item, index) => {
			return (
				<ToDoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} TodoDone={this.props.TodoDone} />
			);
		});
		return (
			<ul className="list-group"> {items} </ul>
		);
		}
}
export default ToDoList