import { Component } from 'react';
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';

import * as postService from './services/postService';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import style from './App.module.css';

//function App() {
//    return (
//        <div className={style.app}>
//            <Header />
//
//            <div className={style.container}>
//                <Menu />
//                <Main />
//            </div>
//        </div>
//    );
//}   

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({posts})
            });
    }

    render() {
        return (
            <div className={style.app}>
                <Header />

                <div className={style.container}>
                    <Menu />

                    <Switch>
                        <Route path="/" exact/>
                        <Route path="/all-posts">
                            <Main posts={this.state.posts}/>
                        </Route>
                        <Route path="/about" exact component={About} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route render={ErrorPage} />
                    </Switch>

                </div>

                <div className={style.footer}>
                    <Footer />
                </div>
        </div>
        );
    }
}

export default App;