import React, { Component, PropTypes } from 'react';
import Card from './Card';

export default class List extends Component {
    render() {
        var cards = this.props.cards.map(card => {
            let color = card.status === 'in-progress'
                    ? '#BD8D31'
                    : card.status === 'todo'
                        ? '#3A7E28'
                        : '#red';
            return <Card
                        key={card.id}
                        color={color}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks} />
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }

}

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}
