import React from 'react';
import ReactDOM from 'react-dom'
import ExampleComponent from './example-component.js';
import GreetingComonent from './greeting-component';
import Table from './table.js';

class MyThing extends React.Component {
    render() {
        return(
            <div>
                <ExampleComponent/>
                <GreetingComonent/>
                <Table/>
            </div>
        );
    }
}

ReactDOM.render(<MyThing/>, document.getElementById('root'));

/* 5. One good way to learn a new syntax is to try breaking it -discover its boundaries. Try some
    of the things this chapter wared about and see what kind of errors you get. At the very least,
    it'll familiarize you with what the errors mean if you make one of these mistakes later on.
        a) Name a component starting with a lowercase letter, like "testComponent".
            ANSWER: Babel will compile the component as a HTML or SVG element and not as a react
                component, therefore, not rendering it correctly to the page.
        b) Try returning 2 elements at once.
            ANSWER: Babel will get angry and will throw out an error and will crash the app.
                The solution to this would be to wrap the 2 elements within a single parent
                element such as a <div> or a react fragment.
        c) Try returning an array with 2 elements inside.
            ANSWER: It will render to the page, but will throw out a warning, asking for you to
                assign unique keys to each element within the array. This is fixed with assigning
                the index + 1 of each element as the key.
        d) Can you put 2 expressions inside single braces, like { x && 5; x && 7 }?
            ANSWER: Yes and No.
                If you use the sytax like so, it will spit out an error but if we replace the semi-colon
                with a comma, it will work. The problem would be that if x is true or truthy, then it
                will be assigned the second value since the first assignment will be overwritten by the
                second statement because they are both true.
        e) What happens if you use return inside a JS expression?
            ANSWER: I'm not exactly sure what this means.
        f) What about a function call like alert('hi')? Does it halt rendering?
            ANSWER: Yes, 
            
            
            
            
            \*/