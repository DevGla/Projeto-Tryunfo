import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // QUESTÃO 4 - Criação do estado incial
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      carts: [{}],
      hasTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verfifyButton = this.verfifyButton.bind(this);
  }

  // Função dentro da QUESTÃO 4, Responsável por Capturar o que foi escrito nos inputs e atualiza o estado que é mostrado na tela através do componente Card, Ao clicar no botão super trunfo, atualizamos o estado (cardTrunfo) para True, dentro do componente Card tem a função Trunfo().

  handleChange(evento) {
    evento.preventDefault();
    const { name, type, value, checked } = evento.target;
    const getValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: getValue }, () => this.verfifyButton());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    const input = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      hasTrunfo,
    };

    this.setState((currentState) => ({
      carts: [...currentState.carts, input],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: !currentState.hasTrunfo,
      isSaveButtonDisabled: true,
    }));
  }

  verfifyButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sumAtr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxAtrib = 90;
    const maxAtribTotal = 210;

    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === ''
    || Number(cardAttr1) > maxAtrib
    || Number(cardAttr1) < 0
    || Number(cardAttr2) > maxAtrib
    || Number(cardAttr2) < 0
    || Number(cardAttr3) > maxAtrib
    || Number(cardAttr3) < 0
    || sumAtr > maxAtribTotal) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      carts,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <span>
          {/* QUESTÃO 1 Criando componente Form e renderização no App.js */}
          {/* QUESTÃO 2 adicionando props ao Formulário */}
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ false }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          {/* QUESTÃO 3 - Criação do componente Card e suas props necessárias e renderização no App.js */}
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </span>
        { carts.map((cards) => (
          <div key={ cards.cardName }>
            <Card { ...cards } />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
