import React from 'react';
import ReactDOM from 'react-dom'
import ExampleComponent from './example-component.js';
import GreetingComonent from './greeting-component';

class MyThing extends React.Component {
    render() {
        return(
            <div>
                {/* <ExampleComponent/> */}
                <GreetingComonent/>
            </div>
        );
    }
}

ReactDOM.render(<MyThing/>, document.getElementById('root'));