import React from 'react'
import ReactDOM from 'react-dom'
import CardItem  from './Card'
import Title from './Title'

class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:"jorge",
      pokemones:null
    }
    this.clickButton = this.clickButton.bind(this)
  }
  clickButton=()=>{
    console.log('probando')
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/pokemon/pokemones')
    .then((val)=>{
      return val.json()
    })
    .then((data)=>{
      //console.log(data)
      this.setState({pokemones: data});
    })
  }
  render(){
  return <div>hola mundo {this.state.name}
  <ul>
    {this.state.pokemones !== null && this.state.pokemones.map((item)=>{
      return <CardItem item={item} onClick={this.clickButton}/>
    })}
  </ul>
  <Title name={"carlos"} />
  </div>
  }
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('todo')
    app && ReactDOM.render(<Todo/>, app)
  })
