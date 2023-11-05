import React from 'react';
import { Alert} from 'react-bootstrap';


const welcomeStyle = {
  background: 'lightgrey',
  color: 'white',
};

const Welcome = () => (
  <Alert className="text-center" style={welcomeStyle}>
    <h1 style={{fontSize: '15px'}}>Welcome to EpiBooks!</h1>
  </Alert>
)

export default Welcome;