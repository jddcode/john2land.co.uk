import React, {Component} from 'react'
import AppleLogin from 'react-apple-login'
import GoogleLogin from 'react-google-login'
import {Redirect} from "react-router-dom";
import Yaml from 'js-yaml'
import checkpoints from '../Data/timeline.js'

export default class Index extends Component {

    constructor(props) {

        super(props)
        this.state = props.state;
    }

    render() {

        var tableRows = this.state.config.comments.Comments.map((item, key) =>

            <>
                    <tr>
                        <th scope="row">{item.Name}</th>
                        <td className="d-none d-md-block">{item.Subject}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            {item.Comment}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            &nbsp;
                        </td>
                    </tr>
            </>
        )

        return (

            <span>
                <div className="card">
                    <div className="card-body textStandardBlue">
                        The following comments have been received from the public. Thank you for all your support.
                    </div>
                </div>

                <div className="card mt-5">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Subject</th>
                        </tr>
                      </thead>
                      <tbody>
                      {tableRows}
                      </tbody>
                    </table>
                </div>
            </span>
        )
    }
}