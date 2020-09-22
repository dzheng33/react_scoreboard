import React, {PureComponent} from 'react';

import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore} />
          { this.props.name }
        </span>
  
        <Counter 
            score={this.props.score} 
            scoreChange={this.props.scoreChange} 
            index={this.props.index}
        />
      </div>
    );
  }
}

export default Player;