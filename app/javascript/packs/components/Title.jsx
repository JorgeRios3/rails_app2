import React from 'react'

class Title extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            persons:null
        }
        this.click = this.click.bind(this)
    }

    click =(e)=>{
        e.preventDefault()
        console.log("viendo click")
    }


    componentDidMount(){
        fetch('http://localhost:3000/api/pokemon/pokemones')
        .then((val)=>{
            return val.json()
        })
        .then((result)=>{
            this.setState({persons:result})
        })
    }

    render(){
    return (<div>jajajaja {this.props.name} {this.state.persons != null && <div onClick={e => this.click(e)}>{this.state.persons[0].name}</div>}</div>)
    }
}


export default Title
