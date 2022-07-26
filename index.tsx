import React from 'react';
import { render } from 'react-dom';
import { Todos } from './todos/todos';
import './style.css';

function App() {
  return (
    <section>
      <h1 className="text-2xl mb-2">Elf Todos</h1>

      <Todos />
    </section>
  );
}

render(<App />, document.getElementById('root'));
