import React from 'react';

class Kanye extends React.Component {
    constructor(props) {
        super(props);

        this.state = { quote: '' , images: []};
    }

    // async/await rather than .then
    // when to use async/await
    // when promises are involved / when it returns a promise (hover over fetch function)
    // fetching things from a database requires async await
    // Hooks can do everything class components can do
    async fetchQuote() {
        try {
            const res = await fetch("https://api.kanye.rest");
            const data = await res.json();
            this.setState({quote: data.quote})
        } catch (error) {
            console.log(`There was an error ${error} fetching quote`)
        }
    }

    componentDidMount() {
        const URL = `https://picsum.photos/${this.props.picSize}`
        this.fetchQuote();
        this.setState( { images: [URL, URL, URL]} )
    }

    render() {
        return (
            <div className='container p-5 d-flex flex-column align-items-center'>
            <h1>{this.state.quote}</h1>
            {
                this.state.images.map((imgURL, idx) => <img key={idx} src={imgURL} />)
            }
            {/* 350 x 350 photo */}
            {/* <img src={`https://picsum.photos/${this.props.picSize}`}  alt="a random image" /> */}
            </div>
        )
    }
}

export { Kanye }