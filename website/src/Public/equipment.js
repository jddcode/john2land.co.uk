import React, {Component} from 'react'
import AppleLogin from 'react-apple-login'
import GoogleLogin from 'react-google-login'
import {Redirect, Link} from "react-router-dom";

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
                        Our Equipment
                    </div>

                    <div className="card-body lead">
                        <p className="lead">
                            To carry us and our equipment will take two mini busses! Nine riders and two drivers all together. We shall all be using standard 'road bikes' and take plenty of spares.
                            This will include wheels, typres, inner tubes, pedals and even a spare saddle. Of course a full toolkit and plenty of chain lube! If you have done a similar ride and found
                            any spares useful then please let us know; it might just help us out of trouble. You can message us from the 'contact us' page.
                        </p>

                        <p className="lead">
                            To update the web site we will be using a GPRS mobile phone and a special WAP service written by John Driscoll. We will also take a laptop computer with modem. This will allow
                            us to update this web site on the move with some pictures of our progress. Check out the links on the 'route' page once the journey gets started.
                        </p>

                        <p className="lead">
                            Following our journey of 918 miles we suffered 5 punctures, two broken spokes and one broken frame. For the cycle nuts it was Alan's 501 Raleigh at the right hand rear chain stay, next
                            to the bottom bracket.
                        </p>

                        <p>
                            <img className="d-none d-lg-block ml-auto mr-auto pt-2" src="/img/BrokenFrame.JPG" />
                            <img className="d-inline d-lg-none" width="350px" src="/img/BrokenFrame.JPG" />
                        </p>
                    </div>
                </div>
            </span>
        )
    }
}