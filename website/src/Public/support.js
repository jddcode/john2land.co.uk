import React, {Component} from 'react'
import AppleLogin from 'react-apple-login'
import GoogleLogin from 'react-google-login'
import {Redirect} from "react-router-dom";

export default class Index extends Component {

    constructor(props) {

        super(props)
        this.state = props.state;
    }

    render() {

        return (

            <span>
                <div className="card">
                    <div className="card-header bg-primary text-white lead">
                        Support Cancer Research & CLIC
                    </div>

                    <div className="card-body lead">
                        <div className="row">
                            <div class="col-12 col-md-6">
                                <p className="lead">
                                    Cheques payable to Cancer Research UK
                                </p>
                                <p className="lead">
                                    John2Land
                                    <br />
                                    c/o Dawn Harrison
                                    <br />
                                    Cancer Research UK
                                    <br />
                                    Unit E1
                                    <br />
                                    The Innovation Centre
                                    <br />
                                    University of Exeter
                                    <br />
                                    Devon
                                    <br />
                                    EX4 4RN
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="lead">
                                    Cheques payable to CLIC
                                </p>
                                <p className="lead">
                                    John2Land
                                    <br />
                                    c/o Chris Banting
                                    <br />
                                    CLIC
                                    <br />
                                    3, Glebelands
                                    <br />
                                    Puddington
                                    <br />
                                    Tiverton
                                    <br />
                                    Devon
                                    <br />
                                    EX16 8ND
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}