import React, {Component} from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "David",
        id: 1,
        score: 0
      },
      {
        name: "Mike",
        id: 2,
        score: 0
      },
      {
        name: "May",
        id: 3,
        score: 0
      },
      {
        name: "Jenny",
        id: 4,
        score: 0
      }
    ]
  };

  prevPlayerId = 4;   

  handleScoreChange = (index,delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render() {
    
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard"
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer} 
            scoreChange={this.handleScoreChange} 
            index={index}    
            isHighScore={this.getHighScore() === player.score}    
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
