import React, {Component} from 'react'
import AppleLogin from 'react-apple-login'
import GoogleLogin from 'react-google-login'
import {Redirect} from "react-router-dom";

export default class Index extends Component {

    constructor(props) {

        super(props)
        this.state = props.state;
        this.switchImage = this.switchImage.bind(this);
    }

    switchImage(image) {
      this.setState({
        image: image
      })
    }

    getHumanDate(date) {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        return dd + "/" + mm + "/" + yyyy
    }

    getTimeFull(date) {
        var hh = String(date.getHours())
        if(date.getHours() < 10) {
            hh = '0' + hh
        }

        var mm = String(date.getMinutes())
        if(date.getMinutes() < 10) {
            mm = '0' + mm
        }

        var ss = String(date.getSeconds())
        if(date.getSeconds() < 10) {
            ss = '0' + ss
        }
        return hh + ":" + mm + ":" + ss
    }

    getHumanTime(date) {
        var hh = String(date.getHours())
        if(date.getHours() < 10) {
            hh = '0' + hh
        }

        var mm = String(date.getMinutes())
        if(date.getMinutes() < 10) {
            mm = '0' + mm
        }

        var ss = String(date.getSeconds())
        if(date.getSeconds() < 10) {
            ss = '0' + ss
        }

        return hh + ":" + mm
    }

    render() {

      var tableRows = this.state.config.checkpoints.Checkpoints.map((item, key) =>

          <>
              {(() => {

                  if(typeof(item.Image) != "undefined") {
                      return (
                          <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(item.Image) } data-toggle="modal" data-target="#photo">
                              <th scope="row">{item.Destination}</th>
                              <td className="d-none d-md-block">{this.getHumanDate(item.Date)}</td>
                              <td className="d-block d-md-none">{this.getHumanDate(item.Date)} - {this.getHumanTime(item.Date)}</td>
                              <td>
                                  <span className="d-inline d-md-none">---</span>
                                  <span className="d-none d-md-inline">{this.getHumanTime(item.Date)}</span>
                              </td>
                              <td>{item.Road}</td>
                          </tr>
                      )

                  } else {
                      return (
                          <tr>
                              <th scope="row">{item.Destination}</th>
                              <td className="d-none d-md-block">{this.getHumanDate(item.Date)}</td>
                              <td className="d-block d-md-none">{this.getHumanDate(item.Date)} - {this.getHumanTime(item.Date)}</td>
                              <td>
                                  <span className="d-inline d-md-none">---</span>
                                  <span className="d-none d-md-inline">{this.getHumanTime(item.Date)}</span>
                              </td>
                              <td>{item.Road}</td>
                          </tr>
                      )
                  }


              })()}
          </>
      )

        return (

            <span>

              <div className="modal fade" id="photo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <img src={"/img/" + this.state.image + ".jpg"} />
                  </div>
                </div>
              </div>

                <div className="card">
                    <div className="card-header bg-primary text-white lead">
                        The Route
                    </div>

                    <div className="card-body lead">
                        The planned route so far is as follows. This may change slightly as we interrogate autoroute! This page will allow you to see our progress updated automatically as we cycle. This will be done
                    via special login to our WAP site which will enable us not only to see our next destination and route but report back to you exactly where we are and when.
                    </div>
                </div>

                <div className="card mt-5">
                    <table className="table mb-0">
  <thead>
    <tr>
      <th scope="col">Destination</th>
      <th scope="col">Date</th>
      <th scope="col" className="d-none d-md-block">Time</th>
      <th scope="col">Road</th>
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