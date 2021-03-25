import { Redirect, useHistory, withRouter, Switch, Route } from 'react-router-dom';

const About = ( { match, location, history } ) => {
    return (        
        <main className="main-container">
            <h1>Abaut Page</h1>
        </main>
    );
}

export default About;