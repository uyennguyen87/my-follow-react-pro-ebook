import React, { Component } from 'react';

export default class CheckList extends Component {
    render() {
        let cardId = this.props.cardId;
        let tasks = this.props.tasks.map(task => {
            const key = `${cardId}_${task.id}`;

            return  <li key={key} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        });

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}
