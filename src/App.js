import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Card,Button,Row,Col} from 'react-bootstrap';

function App() {
  const [val, setval] = useState(0);

  return (
    <div className=" min-vh-100 justify-content-center align-items-center counter">
      
    <Row className="justify-content-center align-items-center   ">
    <Col md="4" sm="6" xs="6" className="column1" > 
        <h1 className="text-center mt-5 pt-5 head">Counter</h1>
            <Card > 
             <Card.Body> {val}</Card.Body> </Card>
            <Row className="justify-content-center align-items-center ml-5 mr-5 ">
            <Button  md="4" xs="6" variant="primary"  className="mt-3  inc"
             onClick={()=>setval(val+1)} block>
              Increment +
            </Button>
            <br/>
            <Button  md="6" sm="" xs="6" variant="primary"  className="mt-3  dec" 
            onClick={()=>setval(val-1)} block>
              Decrement -
            </Button>
            </Row>
          </Col>
      </Row>
      </div>
  );
}

export default App;

