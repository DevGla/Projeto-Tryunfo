import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="nome">
            nome Da Carta
            <input
              type="text"
              id="nome"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="area">
            Descrição da carta
            <input
              type="textarea"
              id="area"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="primeiro-atributo">
            Primeiro atributo da Carta
            <input
              type="number"
              id="primeiro-atributo"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="segundo-atributo">
            segundo atributo da Carta
            <input
              type="number"
              id="segundo-atributo"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="terceiro-atributo">
            terceiro atributo da Carta
            <input
              type="number"
              id="terceiro-atributo"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="caminho">
            caminhoDaImagem
            <input
              type="text"
              id="caminho"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label htmlFor="superTrunfo">
            SuperTrunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="superTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="botao">
            <input
              type="button"
              id="botao"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            />
          </label>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.number.isRequired,
  cardAttr2: propTypes.number.isRequired,
  cardAttr3: propTypes.number.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.bool.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.isRequired,
  isSaveButtonDisabled: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
