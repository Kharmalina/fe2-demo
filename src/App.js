import React from 'react';
import { Kanye } from './components/Kanye';

// props - pass down special parameter/properties in the class / function when its a funational component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // picSize is like passing in a parameter to Kanye class component
            <Kanye picSize="350" />
        )
    }
} 

export { App }