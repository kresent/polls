import React, { Component } from 'react';
import TextAnswer from './TextAnswer';

require('./App.styl');


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [
      1,2,3,4
      ]
    };
  }

  render() {
    const answers = this.state.answers.map(q => (
      <TextAnswer
        val={q}
        key={`q-${q}`}
        />
    ));

    return (
      <div>
        <h1>Ответы</h1>
        {answers}
      </div>
    );
  }
}
