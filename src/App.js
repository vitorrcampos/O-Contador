import React, { Component } from "react";
import "./styles.css";
import styled from "styled-components"



const Container = styled.div`
   text-align: center;   
   margin-top: 5vw;
`

const Remover = styled.button`
width: 20vw;
height: 20vw;
margin-left: 5vw;
border:none;
background-color: aquamarine;
border-radius: 9vw;
font-size: 10vw;
`
const Adicionar = styled.button`
width: 20vw;
height: 20vw;
border:none;
background-color: #E71D36;
border-radius: 9vw;
font-size: 10vw;
`

const Titulo = styled.h1`
margin-bottom: 15vw;
font-size: 10vw;
font-weight: 500;
`
const Contador = styled.h2`
margin-bottom: 5vw;
font-size: 7vw;`

const Mensagem = styled.h2`
margin-top: 13vw;
font-weight: 400;`

class App extends Component {
  state = {
    counter: 0,
    mensagem: "Adicione ou Subtraia! :P"
  }



  

  adicionar = () => {
    const {counter} = this.state
    if(counter < 10){
      this.setState({
        counter: counter + 1,
        mensagem: "Muito bem! :D"
      })
      return counter
    } else {
      this.setState({
        mensagem: "Esse é o máximo! :(",
      })
    }
  }

  remove = () => {
    const {counter} = this.state
    if(counter > 0){
      this.setState({
        counter: counter - 1,
        mensagem: "Isso aí! :)",  })
        return counter
     
     } else{this.setState({
       mensagem: "Não pode ser menor que zero! :("
     })}
  }

  render() {
    const {counter, mensagem} = this.state
    const{adicionar, remove} = this
    return (
      <Container>
      <Titulo>O Contador</Titulo>
        
        <Contador> Você clicou {counter} vezes  </Contador>
        <Adicionar onClick={adicionar}>+</Adicionar>
        <Remover onClick={remove}>-</Remover>
        <Mensagem>{mensagem}</Mensagem>
        <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
            </style>
      </Container>
    );
  }
}

export default App;