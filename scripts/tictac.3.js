var React = require('react');
var ReactDOM = require('react-dom');



var Cell = React.createClass({
    render: function() {
        var colors = ["white", "red", "yellow"];
        return <div 
            style={{backgroundColor:colors[this.props.itm]}}
            className="cell"
            onClick={() => this.props.toggle()}>{this.props.itm}
        </div>
    }
});

var TicTacToe = React.createClass({
  componentWillMount: function() {this.setState({game:[0,0,0,0,0,0,0,0,0], player: 1})},
  winner : function(g) {
    var lines = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    var winner = 0;
    lines.forEach(function(v, idx) {
      var line = [g[v[0]], g[v[1]], g[v[2]]];
      if (line.every(v => v == line[0]) && line[0] > 0) {
        winner = line[0];
      }
    })
    return winner;
  },
  toggle: function(idx) {
    var g = this.state.game.slice();
    g[idx] = this.state.player;
    this.setState({game: g, player: this.state.player == 2 ? 1 : 2});
  },
  render: function() { 
    var rows = [];
    var winner = this.winner(this.state.game);
    this.state.game.forEach(function(itm, idx) {
        var t = itm == 0 && winner == 0 ? () => {this.toggle(idx)} : () => {};
        rows.push(<Cell toggle={t} itm={itm} key={idx}/>);
    }, this);

    return (
      <div>
        TicTacToe - Player {this.state.player} to move
        <div className="board">{rows}</div>
        {winner == 0 ? "Game is running" : "Game over. Winner is player: " + winner}
      </div>
    );
  }
});


ReactDOM.render(<TicTacToe/>, document.getElementById('content'));
