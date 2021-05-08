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
                    <div className="card-body textStandardBlue">
                        This page will tell you why, when and where we are as well as how you can help us, Cancer Research UK and CLIC. Why not visit us on your mobile at wap.john2land.co.uk
                    </div>
                </div>

                <div className="card mt-5">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col" className="textStandardBlack">Date</th>
                          <th scope="col" className="textStandardBlack">Route</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Tuesday 16th Sept 2003 at 20:00</span>
                                <span className="d-inline d-lg-none">16/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Travel to John O' Groats
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Wednesday 17th</span>
                                <span className="d-inline d-lg-none">17/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                John O' Groats Preparation
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Thursday 18th</span>
                                <span className="d-inline d-lg-none">18/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                John O' Groats to Ross Shire
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Friday 19th</span>
                                <span className="d-inline d-lg-none">19/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Ross Shire to Argyll
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Saturday 20th</span>
                                <span className="d-inline d-lg-none">20/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Argyll to Glasgow
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Sunday 21st</span>
                                <span className="d-inline d-lg-none">21/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Glasgow to Carlisle
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Monday 22nd</span>
                                <span className="d-inline d-lg-none">22/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Carlisle to Preston
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Tuesday 23rd</span>
                                <span className="d-inline d-lg-none">23/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Preston to Birmingham
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Wednesday 24th</span>
                                <span className="d-inline d-lg-none">24/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Birmingham to Bristol
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Thursday 25th</span>
                                <span className="d-inline d-lg-none">25/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Bristol to Plymouth
                            </td>
                        </tr>
                      <tr>
                            <td className="textStandardBlue">
                                <span className="d-none d-lg-inline">Friday 26th</span>
                                <span className="d-inline d-lg-none">26/09/03</span>
                            </td>
                            <td className="textStandardBlue">
                                Plymouth to Lands End
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </span>
        )
    }
}