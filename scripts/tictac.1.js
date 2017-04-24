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
  toggle: function(idx) {
    var g = this.state.game.slice();
    g[idx] = this.state.player;
    var newPlayer = this.state.player == 2 ? 1 : 2;
    this.setState({game: g, player: newPlayer});
  },
  render: function() { 
    var rows = [];
    this.state.game.forEach(function(itm, idx) {
        rows.push(<Cell toggle={() => {this.toggle(idx)}} itm={itm} key={idx}/>);
    }, this);

    return (
      <div>
        TicTacToe - Player {this.state.player} to move
        <div className="board">{rows}</div>
      </div>
    );
  }
});


ReactDOM.render(<TicTacToe/>, document.getElementById('content'));
