import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { Stage, Container } from '@inlet/react-pixi'
import * as serviceWorker from './serviceWorker';
import Test from "./Test";

ReactDOM.render(
  <Stage width={300} height={300} options={{ backgroundColor: 0x01262a }}>
    <Container x={150} y={150}>
      <Test />
    </Container>
  </Stage>,
  document.getElementById('root')
);

serviceWorker.unregister();
