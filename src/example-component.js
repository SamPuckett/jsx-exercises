import React from 'react';

class ExampleComponent extends React.Component {
    render() {
        return(
            // 1. Create a component that renders this JSX

            <div className='book'>
                <div className='title'>
                    The Title
                </div>
                <div className='author'>
                    The Author
                </div>
                <ul className='stats'>
                    <li className='rating'>
                        5 Stars
                    </li>
                    <li className='isbn'>
                        12-345678-910
                    </li>
                </ul>

                {/* 2. See how JSX interprets whitespace. Try rendering these arrangements and
                    take note of the output. (hint: leading and trailing spaces are removed,
                    and so are new lines.) */}

                {/* 2a. Single Lines */}

                <div>
                Newline
                Test
                </div>

                {/* 2b. Empty newlines */}

                <div>
                Empty

                Newlines

                Here
                </div>

                {/* 2c. Spaces with newlines */}

                <div>
                &nbsp;Non-breaking
                &nbsp;Spaces&nbsp;
                </div>

                {/* 2d. Inserting spaces when contant spans multiple lines */}

                <div>
                Line1
                {' '}
                Line2
                </div>

            </div>
        );
    }
}

export default ExampleComponent;