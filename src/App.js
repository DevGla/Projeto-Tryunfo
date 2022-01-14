import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardTrunfo: false,
      cardImage: '',
      carts: [],
      cardRare: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verfifyButton = this.verfifyButton.bind(this);
  }

  handleChange(evento) {
    const { name, type, value, checked } = evento.target;
    const getValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: getValue }, () => this.verfifyButton());
  }

  onSaveButtonClick(evento) {
    evento.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    } = this.state;

    const input = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    };

    this.setState((currentState) => ({
      carts: [...currentState.carts, input],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      hasTrunfo: !currentState.hasTrunfo,
      cardRare: 'normal',
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
      cardTrunfo,
      cardImage,
      cardRare,
      hasTrunfo,
      carts,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardTrunfo={ cardTrunfo }
            cardImage={ cardImage }
            hasTrunfo={ hasTrunfo }
            cardRare={ cardRare }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardTrunfo={ cardTrunfo }
            cardImage={ cardImage }
            cardRare={ cardRare }
          />
          <div>
            { carts.map((cards) => (
              <div key={ cards.cardName }>
                <Card { ...cards } />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
