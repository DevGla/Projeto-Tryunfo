import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evento) {
    const { name, type, value, checked } = evento.target;
    const getValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: getValue }, () => this.verfifyButton());
  }

  verfifyButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // isSaveButtonDisabled,
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
  };

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <span>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ false }
            hasTrunfo={ false }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
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
      </div>
    );
  }
}

export default App;
