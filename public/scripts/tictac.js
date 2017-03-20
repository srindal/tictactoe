
var Cell = React.createClass({
    render: function() {
        var colors = ["white", "red", "yellow"];
        return <div style={{backgroundColor:colors[this.props.itm]}} className="cell">
            {this.props.itm}
            </div>
    }
});

var TicTacToe = React.createClass({
  componentWillMount: function() {this.setState({game:[0,0,0,0,0,0,0,0,0], player: 1})},
  render: function() { 
    var rows = [];
    this.state.game.forEach(function(itm, idx) {
        rows.push(<Cell itm={itm} key={idx}/>);
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
