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

    render() {

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
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(0) } data-toggle="modal" data-target="#photo">
      <th scope="row">John O Groats</th>
      <td className="d-none d-md-block">18th September 2003</td>
      <td>
        <span className="d-inline d-md-none">18th - 11:12</span>
        <span className="d-none d-md-inline">11:12:07</span>
      </td>
      <td>A99</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(1) } data-toggle="modal" data-target="#photo">
      <th scope="row">John O Groats</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 06:43</span>
        <span className="d-none d-md-inline">06:43:44</span>
      </td>
      <td>A99</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(2) } data-toggle="modal" data-target="#photo">
      <th scope="row">Wick</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 07:46</span>
        <span className="d-none d-md-inline">07:46:58</span>
      </td>
      <td>A99</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(3) } data-toggle="modal" data-target="#photo">
      <th scope="row">Dumbeath</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 09:25</span>
        <span className="d-none d-md-inline">09:25:36</span>
      </td>
      <td>A99</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(4) } data-toggle="modal" data-target="#photo">
      <th scope="row">Helmsdale</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 11:03</span>
        <span className="d-none d-md-inline">11:03:36</span>
      </td>
      <td>A9</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(5) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bora</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 12:02</span>
        <span className="d-none d-md-inline">12:02:13</span>
      </td>
      <td>A9</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(6) } data-toggle="modal" data-target="#photo">
      <th scope="row">Golspie</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 12:33</span>
        <span className="d-none d-md-inline">12:33:09</span>
      </td>
      <td>A9</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(7) } data-toggle="modal" data-target="#photo">
      <th scope="row">Dornoch Firth</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 14:42</span>
        <span className="d-none d-md-inline">14:42:46</span>
      </td>
      <td>A9</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(8) } data-toggle="modal" data-target="#photo">
      <th scope="row">Tain</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 14:54</span>
        <span className="d-none d-md-inline">14:54:15</span>
      </td>
      <td>A9</td>
    </tr>
    <tr>
      <th scope="row">Alness</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 17:12</span>
        <span className="d-none d-md-inline">17:12:24</span>
      </td>
      <td>A9</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(10) } data-toggle="modal" data-target="#photo">
      <th scope="row">Cromarty Firth</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 17:15</span>
        <span className="d-none d-md-inline">17:15:00</span>
      </td>
      <td>A9</td>
    </tr>
    <tr>
      <th scope="row">Tore</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 17:15</span>
        <span className="d-none d-md-inline">17:15:40</span>
      </td>
      <td>A9</td>
    </tr>
    <tr>
      <th scope="row">Moray Firth</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 17:20</span>
        <span className="d-none d-md-inline">17:20:37</span>
      </td>
      <td>A9</td>
    </tr>
    <tr>
      <th scope="row">Inverness</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 17:21</span>
        <span className="d-none d-md-inline">17:21:55</span>
      </td>
      <td>A82</td>
    </tr>
    <tr>
      <th scope="row">Drumnadrochit</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 18:48</span>
        <span className="d-none d-md-inline">18:48:31</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(15) } data-toggle="modal" data-target="#photo">
      <th scope="row">Drumnadrochit</th>
      <td className="d-none d-md-block">19th September 2003</td>
      <td>
        <span className="d-inline d-md-none">19th - 18:48</span>
        <span className="d-none d-md-inline">18:48:49</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(16) } data-toggle="modal" data-target="#photo">
      <th scope="row">Invermoriston</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 08:39</span>
        <span className="d-none d-md-inline">08:39:42</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(17) } data-toggle="modal" data-target="#photo">
      <th scope="row">Fort Augustus</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 09:48</span>
        <span className="d-none d-md-inline">09:48:54</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(18) } data-toggle="modal" data-target="#photo">
      <th scope="row">Invergarry</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 11:11</span>
        <span className="d-none d-md-inline">11:11:57</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(19) } data-toggle="modal" data-target="#photo">
      <th scope="row">Lach Lochy</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 11:29</span>
        <span className="d-none d-md-inline">11:29:16</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(20) } data-toggle="modal" data-target="#photo">
      <th scope="row">Spear Bridge</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 12:06</span>
        <span className="d-none d-md-inline">12:06:37</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(21) } data-toggle="modal" data-target="#photo">
      <th scope="row">Fort William</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 13:36</span>
        <span className="d-none d-md-inline">13:36:02</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(22) } data-toggle="modal" data-target="#photo">
      <th scope="row">Orich</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 13:54</span>
        <span className="d-none d-md-inline">13:54:59</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(23) } data-toggle="modal" data-target="#photo">
      <th scope="row">North Ballachuish</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 14:52</span>
        <span className="d-none d-md-inline">14:52:41</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(24) } data-toggle="modal" data-target="#photo">
      <th scope="row">Glen Coe</th>
      <td className="d-none d-md-block">20th September 2003</td>
      <td>
        <span className="d-inline d-md-none">20th - 14:52</span>
        <span className="d-none d-md-inline">14:52:46</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(25) } data-toggle="modal" data-target="#photo">
      <th scope="row">Glen Coe</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 07:20</span>
        <span className="d-none d-md-inline">07:20:32</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(26) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bridge Of Orchie</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 09:06</span>
        <span className="d-none d-md-inline">09:06:06</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(27) } data-toggle="modal" data-target="#photo">
      <th scope="row">Tyndrum</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 09:42</span>
        <span className="d-none d-md-inline">09:42:22</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(28) } data-toggle="modal" data-target="#photo">
      <th scope="row">Crainlarich</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 10:03</span>
        <span className="d-none d-md-inline">10:03:37</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(29) } data-toggle="modal" data-target="#photo">
      <th scope="row">Loch Lomond</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 12:26</span>
        <span className="d-none d-md-inline">12:26:12</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(30) } data-toggle="modal" data-target="#photo">
      <th scope="row">Tarbet</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 13:03</span>
        <span className="d-none d-md-inline">13:03:39</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(31) } data-toggle="modal" data-target="#photo">
      <th scope="row">Luss</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 13:22</span>
        <span className="d-none d-md-inline">13:22:10</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(32) } data-toggle="modal" data-target="#photo">
      <th scope="row">Alexandria</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 14:03</span>
        <span className="d-none d-md-inline">14:03:52</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(33) } data-toggle="modal" data-target="#photo">
      <th scope="row">Dumbarton</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 14:27</span>
        <span className="d-none d-md-inline">14:27:08</span>
      </td>
      <td>A82</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(34) } data-toggle="modal" data-target="#photo">
      <th scope="row">Glasgow (Govan)</th>
      <td className="d-none d-md-block">21st September 2003</td>
      <td>
        <span className="d-inline d-md-none">21st - 15:26</span>
        <span className="d-none d-md-inline">15:26:34</span>
      </td>
      <td>Local</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(35) } data-toggle="modal" data-target="#photo">
      <th scope="row">Glasgow (Govan)</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 08:07</span>
        <span className="d-none d-md-inline">08:07:10</span>
      </td>
      <td>Local</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(36) } data-toggle="modal" data-target="#photo">
      <th scope="row">Hamilton</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 08:42</span>
        <span className="d-none d-md-inline">08:42:07</span>
      </td>
      <td>Local</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(37) } data-toggle="modal" data-target="#photo">
      <th scope="row">Larkhall</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 09:41</span>
        <span className="d-none d-md-inline">09:41:59</span>
      </td>
      <td>B7078</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(38) } data-toggle="modal" data-target="#photo">
      <th scope="row">Abington</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 11:41</span>
        <span className="d-none d-md-inline">11:41:30</span>
      </td>
      <td>A702</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(39) } data-toggle="modal" data-target="#photo">
      <th scope="row">Moffat</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 13:05</span>
        <span className="d-none d-md-inline">13:05:53</span>
      </td>
      <td>A702</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(40) } data-toggle="modal" data-target="#photo">
      <th scope="row">Lockerbie</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 13:48</span>
        <span className="d-none d-md-inline">13:48:46</span>
      </td>
      <td>B7076</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(41) } data-toggle="modal" data-target="#photo">
      <th scope="row">Gretna Green</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 15:25</span>
        <span className="d-none d-md-inline">15:25:05</span>
      </td>
      <td>A74</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(42) } data-toggle="modal" data-target="#photo">
      <th scope="row">Carlisle</th>
      <td className="d-none d-md-block">22nd September 2003</td>
      <td>
        <span className="d-inline d-md-none">22nd - 21:10</span>
        <span className="d-none d-md-inline">21:10:24</span>
      </td>
      <td>A7</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(43) } data-toggle="modal" data-target="#photo">
      <th scope="row">Carlisle</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 07:30</span>
        <span className="d-none d-md-inline">07:30:40</span>
      </td>
      <td>A7</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(44) } data-toggle="modal" data-target="#photo">
      <th scope="row">Penrith</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 08:59</span>
        <span className="d-none d-md-inline">08:59:16</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(45) } data-toggle="modal" data-target="#photo">
      <th scope="row">Shap Fells</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 12:23</span>
        <span className="d-none d-md-inline">12:23:48</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(46) } data-toggle="modal" data-target="#photo">
      <th scope="row">Kendal</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 12:23</span>
        <span className="d-none d-md-inline">07:30:40</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(47) } data-toggle="modal" data-target="#photo">
      <th scope="row">Carnforth</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 14:38</span>
        <span className="d-none d-md-inline">14:38:20</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(48) } data-toggle="modal" data-target="#photo">
      <th scope="row">Lancaster</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 15:04</span>
        <span className="d-none d-md-inline">15:04:02</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(49) } data-toggle="modal" data-target="#photo">
      <th scope="row">Garstang</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 15:53</span>
        <span className="d-none d-md-inline">15:53:56</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(50) } data-toggle="modal" data-target="#photo">
      <th scope="row">Preston</th>
      <td className="d-none d-md-block">23rd September 2003</td>
      <td>
        <span className="d-inline d-md-none">23rd - 16:44</span>
        <span className="d-none d-md-inline">16:44:50</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(51) } data-toggle="modal" data-target="#photo">
      <th scope="row">Preston</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 07:48</span>
        <span className="d-none d-md-inline">07:48:52</span>
      </td>
      <td>A6</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(52) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bamber Bridge</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 08:03</span>
        <span className="d-none d-md-inline">08:03:11</span>
      </td>
      <td>A6</td>
    </tr>
    <tr>
      <th scope="row">Leyland</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 08:10</span>
        <span className="d-none d-md-inline">08:10:14</span>
      </td>
      <td>A49</td>
    </tr>
    <tr>
      <th scope="row">Chorley</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 08:18</span>
        <span className="d-none d-md-inline">08:18:51</span>
      </td>
      <td>A49</td>
    </tr>
    <tr>
      <th scope="row">Wigan</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 09:26</span>
        <span className="d-none d-md-inline">09:26:53</span>
      </td>
      <td>A49</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(56) } data-toggle="modal" data-target="#photo">
      <th scope="row">Ashton In Makefield</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 10:19</span>
        <span className="d-none d-md-inline">10:19:58</span>
      </td>
      <td>A49</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(57) } data-toggle="modal" data-target="#photo">
      <th scope="row">Warrington</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 10:54</span>
        <span className="d-none d-md-inline">10:54:55</span>
      </td>
      <td>A49</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(58) } data-toggle="modal" data-target="#photo">
      <th scope="row">Knutsford</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 11:48</span>
        <span className="d-none d-md-inline">11:48:28</span>
      </td>
      <td>A50</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(59) } data-toggle="modal" data-target="#photo">
      <th scope="row">Holmes Chapel</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 12:20</span>
        <span className="d-none d-md-inline">12:20:51</span>
      </td>
      <td>A50</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(60) } data-toggle="modal" data-target="#photo">
      <th scope="row">Kidsgrove</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 14:22</span>
        <span className="d-none d-md-inline">14:22:30</span>
      </td>
      <td>A34</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(61) } data-toggle="modal" data-target="#photo">
      <th scope="row">Stoke On Trent</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:45</span>
        <span className="d-none d-md-inline">15:45:02</span>
      </td>
      <td>A34</td>
    </tr>
    <tr>
      <th scope="row">Stone</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:45</span>
        <span className="d-none d-md-inline">15:45:07</span>
      </td>
      <td>A34</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(63) } data-toggle="modal" data-target="#photo">
      <th scope="row">Yarlett</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:45</span>
        <span className="d-none d-md-inline">15:45:10</span>
      </td>
      <td>A34</td>
    </tr>
    <tr>
      <th scope="row">Stafford</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:45</span>
        <span className="d-none d-md-inline">15:45:16</span>
      </td>
      <td>A34</td>
    </tr>
    <tr>
      <th scope="row">Dunston</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:45</span>
        <span className="d-none d-md-inline">15:45:24</span>
      </td>
      <td>A449</td>
    </tr>
    <tr>
      <th scope="row">Codsall</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 15:47</span>
        <span className="d-none d-md-inline">15:47:35</span>
      </td>
      <td>A449</td>
    </tr>
    <tr>
      <th scope="row">Birmingham</th>
      <td className="d-none d-md-block">24th September 2003</td>
      <td>
        <span className="d-inline d-md-none">24th - 18:12</span>
        <span className="d-none d-md-inline">18:12:27</span>
      </td>
      <td>Local</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(68) } data-toggle="modal" data-target="#photo">
      <th scope="row">Birmingham</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 04:04</span>
        <span className="d-none d-md-inline">04:04:08</span>
      </td>
      <td>Local</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(69) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bromsgrove</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 05:12</span>
        <span className="d-none d-md-inline">05:12:00</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(70) } data-toggle="modal" data-target="#photo">
      <th scope="row">Droitwich</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 05:45</span>
        <span className="d-none d-md-inline">05:45:59</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(71) } data-toggle="modal" data-target="#photo">
      <th scope="row">Worcester</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 06:23</span>
        <span className="d-none d-md-inline">06:23:25</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(72) } data-toggle="modal" data-target="#photo">
      <th scope="row">Tewkesbury</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 07:27</span>
        <span className="d-none d-md-inline">07:27:36</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(73) } data-toggle="modal" data-target="#photo">
      <th scope="row">Gloucester</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 08:40</span>
        <span className="d-none d-md-inline">08:40:43</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(74) } data-toggle="modal" data-target="#photo">
      <th scope="row">Cambridge</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 10:12</span>
        <span className="d-none d-md-inline">10:12:17</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(75) } data-toggle="modal" data-target="#photo">
      <th scope="row">Newport</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 10:38</span>
        <span className="d-none d-md-inline">10:38:47</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Stone</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 10:44</span>
        <span className="d-none d-md-inline">10:44:03</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(77) } data-toggle="modal" data-target="#photo">
      <th scope="row">Almondsbury</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 11:20</span>
        <span className="d-none d-md-inline">11:20:07</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(78) } data-toggle="modal" data-target="#photo">
      <th scope="row">Patchway</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 11:21</span>
        <span className="d-none d-md-inline">11:21:10</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Filton</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 11:32</span>
        <span className="d-none d-md-inline">11:32:13</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Bristol</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 11:57</span>
        <span className="d-none d-md-inline">11:57:53</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Cowslip Green</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 13:19</span>
        <span className="d-none d-md-inline">13:19:13</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Lower Wear</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 13:30</span>
        <span className="d-none d-md-inline">13:30:48</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Tarnock</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 13:40</span>
        <span className="d-none d-md-inline">13:40:49</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(84) } data-toggle="modal" data-target="#photo">
      <th scope="row">Huntspill</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 14:04</span>
        <span className="d-none d-md-inline">14:04:29</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(85) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bridgewater</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 14:23</span>
        <span className="d-none d-md-inline">14:23:31</span>
      </td>
      <td>A38</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(86) } data-toggle="modal" data-target="#photo">
      <th scope="row">Taunton</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 15:15</span>
        <span className="d-none d-md-inline">15:15:17</span>
      </td>
      <td>A38</td>
    </tr>
    <tr>
      <th scope="row">Corfe</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 15:54</span>
        <span className="d-none d-md-inline">15:54:32</span>
      </td>
      <td>B3170</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(88) } data-toggle="modal" data-target="#photo">
      <th scope="row">Newcott</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 16:54</span>
        <span className="d-none d-md-inline">16:54:25</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(89) } data-toggle="modal" data-target="#photo">
      <th scope="row">Monkton</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:16</span>
        <span className="d-none d-md-inline">17:16:09</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr>
      <th scope="row">Honiton</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:41</span>
        <span className="d-none d-md-inline">17:41:02</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr>
      <th scope="row">Rockbere</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:42</span>
        <span className="d-none d-md-inline">17:42:20</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr>
      <th scope="row">Wimple</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:42</span>
        <span className="d-none d-md-inline">17:42:37</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr>
      <th scope="row">Exeter Airport</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:42</span>
        <span className="d-none d-md-inline">17:42:47</span>
      </td>
      <td>Old A30</td>
    </tr>
    <tr>
      <th scope="row">Newton Poppleford</th>
      <td className="d-none d-md-block">25th September 2003</td>
      <td>
        <span className="d-inline d-md-none">25th - 17:50</span>
        <span className="d-none d-md-inline">17:50:49</span>
      </td>
      <td>B Road</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(95) } data-toggle="modal" data-target="#photo">
      <th scope="row">Newton Poppleford</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 08:19</span>
        <span className="d-none d-md-inline">08:19:39</span>
      </td>
      <td>B Road</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(96) } data-toggle="modal" data-target="#photo">
      <th scope="row">Exeter</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 08:19</span>
        <span className="d-none d-md-inline">08:19:55</span>
      </td>
      <td>A3052</td>
    </tr>
    <tr>
      <th scope="row">Okehampton</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 09:16</span>
        <span className="d-none d-md-inline">09:16:33</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(98) } data-toggle="modal" data-target="#photo">
      <th scope="row">Launceston</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 11:36</span>
        <span className="d-none d-md-inline">11:36:56</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(99) } data-toggle="modal" data-target="#photo">
      <th scope="row">Bodmin</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 12:58</span>
        <span className="d-none d-md-inline">12:58:41</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(100) } data-toggle="modal" data-target="#photo">
      <th scope="row">Redruth</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 16:05</span>
        <span className="d-none d-md-inline">16:05:06</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(101) } data-toggle="modal" data-target="#photo">
      <th scope="row">Cambourne</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 16:10</span>
        <span className="d-none d-md-inline">16:10:26</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(102) } data-toggle="modal" data-target="#photo">
      <th scope="row">Penzance</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 17:19</span>
        <span className="d-none d-md-inline">17:19:26</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(103) } data-toggle="modal" data-target="#photo">
      <th scope="row">Drift</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 17:31</span>
        <span className="d-none d-md-inline">17:31:23</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(104) } data-toggle="modal" data-target="#photo">
      <th scope="row">Crows-An-Wra</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 17:44</span>
        <span className="d-none d-md-inline">17:44:41</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(106) } data-toggle="modal" data-target="#photo">
      <th scope="row">Sennen</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 17:51</span>
        <span className="d-none d-md-inline">17:51:06</span>
      </td>
      <td>A30</td>
    </tr>
    <tr className="bg-light" style={{cursor: 'pointer'}} onClick={() => this.switchImage(107) } data-toggle="modal" data-target="#photo">
      <th scope="row">Lands End</th>
      <td className="d-none d-md-block">26th September 2003</td>
      <td>
        <span className="d-inline d-md-none">26th - 17:58</span>
        <span className="d-none d-md-inline">17:58:57</span>
      </td>
      <td>A30</td>
    </tr>
  </tbody>
</table>
                </div>
            </span>
        )
    }
}