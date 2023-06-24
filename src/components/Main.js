import React, {Component} from 'react';
import './Main.css';
import {FaPlusCircle, FaEdit,FaWindowClose} from 'react-icons/fa';

export default class Main extends Component{

  state = {
    novaTarefa: '',
    tarefas:[
      'Estudar React',
      'Fazer currículo',
      'Fazer site'
    ]
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    });
  }

  render(){
    const {novaTarefa, tarefas} = this.state;

    return (
      <div className = "main">

        <h1> Lista de Tarefas:</h1><br/>

        <form action='#' className='form'>
          <input onChange={this.handleChange} type="text" value = {novaTarefa}/>
          <button type="submit"><FaPlusCircle /> </button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className='edit' />
                <FaWindowClose className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}