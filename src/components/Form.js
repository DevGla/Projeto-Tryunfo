import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            nome Da Carta
            <input type="text" id="nome" data-testid="name-input" />
          </label>
          <label htmlFor="area">
            Descrição da carta
            <input type="textarea" id="area" data-testid="description-input" />
          </label>
          <label htmlFor="primeiro-atributo">
            Primeiro atributo da Carta
            <input type="number" id="primeiro-atributo" data-testid="attr1-input" />
          </label>
          <label htmlFor="segundo-atributo">
            segundo atributo da Carta
            <input type="number" id="segundo-atributo" data-testid="attr2-input" />
          </label>
          <label htmlFor="terceiro-atributo">
            terceiro atributo da Carta
            <input type="number" id="terceiro-atributo" data-testid="attr3-input" />
          </label>
          <label htmlFor="caminho">
            caminhoDaImagem
            <input type="text" id="caminho" data-testid="image-input" />
          </label>
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label htmlFor="superTrunfo">
            SuperTrunfo
            <input type="checkbox" data-testid="trunfo-input" id="superTrunfo" />
          </label>
          <label htmlFor="botao">
            <input type="button" id="botao" data-testid="save-button" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
