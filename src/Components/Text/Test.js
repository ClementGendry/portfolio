import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Test = (props) => (
    <div>
        <p>
            {props.phrase}
        </p>
        <ButtonGroup vertical block>
            <Button>Full width button</Button>
            <Button>Full width button</Button>
        </ButtonGroup>;
    </div>
); 

export default Test;