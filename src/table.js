import React from 'react';
import Data from './data.js';

class Table extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Data/>
                        <Data/>
                        <Data/>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;

/* 6. The HTML spec says that <table>s must be structured with a <table> element surrounding
    a <tbody>, which surrounds multiple <tr>s (the rows), which each surround multiple
    <td>s (the columns). Create a component called <Table/> that renders a <table> with
    1 row and 3 columns and any data you like. Open the browser console and make sure there
    are no warnings. Then create a component called <Data/> that renders the 3 columns,
    and replace the 3 <td>s with the <Data/> component.
        ANSWER: This component, along with <Data/> solve this question without any issues.
*/