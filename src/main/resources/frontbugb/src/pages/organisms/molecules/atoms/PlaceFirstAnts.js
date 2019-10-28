import React from 'react';


class PlaceFirstAnt extends React.Component{
  constructor(props) {
    super(props) 
        this.state = {

        }
    
}

  render() {
    if(this.props.rendering && this.props.identity === this.props.playerTurn) {
      return (
        <div>
          <p> Entrez le territoire que vous souhaitez envahir :</p>
          <p> Une fourmi de votre stock sera automatiquement placée sur ce terrain.</p>
          <input type="text" onChange={this.props.changeTerritory1} value={this.state.territory1}></input>
          <button onClick={this.props.placeFirstAnts}>Envoyer</button>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}

export default PlaceFirstAnt;