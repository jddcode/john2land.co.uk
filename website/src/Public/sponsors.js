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
                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">
                            <img src="/img/RoyalMarinesEmblem.gif" />
                        </div>
                        <div className="col-8">
                            <p className="lead">
                                The Royal Marines
                            </p>
                            Thanks to the Royal Marines for transport and accomodation
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">
                            <a href="https://bt.com" target="_blank">
                                <img src="/img/bt_logo.gif" />
                            </a>
                        </div>
                        <div className="col-8">
                            <p className="lead">
                                BT Procurement
                            </p>
                            Thanks to Mark Deveny from BT Procurement for supplying mobile comms
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">

                        </div>
                        <div className="col-8">
                            <p className="lead">
                                John Driscoll
                            </p>
                            Thanks to John Driscoll for the technical expertise in developing this site.
                            <br />
                            Check out his other project here: &nbsp; <a href="https://shortify.pro" target="_blank">shortify.pro</a>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">

                        </div>
                        <div className="col-8">
                            <p className="lead">
                                Jose Fudge
                            </p>
                            Thanks to JoseFudge for help, advice and sponsorship when designing our t-shirts
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">
                            <a href="/pjdHome.htm" target="_blank">
                                <img src="/img/pjdlogo.jpg" />
                            </a>
                        </div>
                        <div className="col-8">
                            <p className="lead">
                                PJD Stock Control
                            </p>
                            Thanks to PJD Stock Control for celebratory champagne !
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">
                            <a href="http://xpedia.frogtrade.net/" target="_blank">
                                <img src="/img/xpedia_co_uk.gif" />
                            </a>
                        </div>
                        <div className="col-8">
                            <p className="lead">
                                XPedia.co.uk
                            </p>
                            Thanks to Roger at XPedia.co.uk for the energy drinks...
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body row">
                        <div className="col-4">
                            <a href="https://www.o2.co.uk" target="_blank">
                                <img src="/img/O2logo.gif" />
                            </a>
                        </div>
                        <div className="col-8">
                            <p className="lead">
                                O2
                            </p>
                            Thanks to Bob Hirons and Tracey Woodhead for our mobile 'talk time'
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-body">
                        Thanks to John and Julia McDonald of Sidmouth Body Repairs for spraying our spare frame at such short notice.
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        Thanks to Graham Paton at Linguassist for his generous donation to our charities
                    </div>
                </div>
            </span>
        )
    }
}