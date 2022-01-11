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
      // cardTrunfo: false,
      // hasTrunfo: false,
    };
  }

  handleChangeCheckBox = (event) => {
    const { name, checked, type, value } = event.target;
    const values = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: values,
    });
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
      // cardTrunfo,
      // hasTrunfo,
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
            // isSaveButtonDisabled={ false }
            // onInputChange={ onInputChange }
            // onSaveButtonClick={ onSaveButtonClick }
          />
          <Card
            cardName=""
            cardDescription=""
            cardAttr1=""
            cardAttr2=""
            cardAttr3=""
            cardImage=""
            cardRare=""
            cardTrunfo={ false }
          />
        </span>
      </div>
    );
  }
}

export default App;
