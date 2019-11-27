import React from 'react';

class GreetingComponent extends React.Component {
    /* 4. Return the appropriate JSX from this component so that when 'username'
        is undefined of null, it renders "not logged in". When 'username' is a string,
        render "Hello, username." */
    render() {
        // Try all of these variations:
        let username = 'root';
        // let username = undefined;
        // let username = null;
        // let username = false;

        // Fill in the rest:

        return(
            <div>{username ? 'Hello, username' : 'not logged in'}</div>
        );
    }
}

export default GreetingComponent;