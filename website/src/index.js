import React, { Component } from 'react'
import { render } from 'react-snapshot'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import './Components/site.css'
import ls from 'local-storage';
import checkpoints from './Data/timeline.js'
import comments from './Data/comments.js'

import Page from './Components/Page'
import Session from './Components/Session'
import SiteRoot from './Public/index'
import CycleRoute from './Public/route'
import Support from './Public/support'
import Sponsors from './Public/sponsors'
import Equipment from './Public/equipment'
import Comments from './Public/comments'
import Yaml from "js-yaml";

class Application extends Component {

    constructor(props) {

        super(props)

        var state = JSON.parse(ls.get('state'))
        if(state == null) {

            state = new Object();
        }

        this.state = state;
        this.storeState = this.storeState.bind(this);
    }

    configuration() {

        var config = {
            checkpoints: Yaml.load(checkpoints),
            comments: Yaml.load(comments)
        }

        return config
    }

    storeState(key, val) {

        if(JSON.stringify(this.state[key]) == JSON.stringify(val)) {

            return
        }

        this.setState({

            [key]: val

        }, () => {

            ls.set('state', JSON.stringify(this.state))
        })
    }

    render() {

        var state = this.state;
        state['updateApp'] = this.storeState;
        state['config'] = this.configuration();

        return (

            <Router>

                <Switch>

                    {/* Public Pages */}
                    <Route exact path="/" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <SiteRoot state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Cycling Route */}
                    <Route exact path="/route" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <CycleRoute state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Support charity page */}
                    <Route exact path="/support" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <Support state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Our sponsors page */}
                    <Route exact path="/sponsors" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <Sponsors state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Equipment page */}
                    <Route exact path="/equipment" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <Equipment state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Comments Page */}
                    <Route exact path="/comments" render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state={this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <Comments state={this.state} />

                            </Page>
                        </Session>
                    )}/>

                    {/* Catch All */}
                    <Route render={routeProps => (

                        <Session state={this.state}>
                            <Page
                                state = {this.state}
                                title = "John2Land.co.uk"
                                pageSubCaption = "Nine days cycling for Cancer Research UK and CLIC"
                            >
                                <SiteRoot state={this.state} />
                            </Page>
                        </Session>
                    )}/>
                </Switch>
            </Router>
        )
    }
}



render(<Application />, document.getElementById('root'))
