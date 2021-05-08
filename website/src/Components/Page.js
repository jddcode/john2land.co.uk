import React, { Component } from 'react'
import Menu from './Menu'
import Data from './Data'
import {Link, Redirect} from "react-router-dom";

function Page(props) {

    if(props.headTitle) {

        document.title = props.headTitle
    }

    return (

        <span>
            <Menu state={props.state} />
            <main className="main siteBackground" role="main">

                <div className="pb-4 pt-2">
                    <div className="container">

                        <div className="row mt-3 mb-2 pb-4 mb-sm-2">
                            <div className="col-md-8 mx-auto">
                                <h1 className="h1 text-center siteMainHeaderTextColour">
                                    {props?.title}
                                </h1>

                                {(() => {

                                    if(props?.pageSubCaption) {

                                        return (

                                            <h4 className="text-center siteBlueText">
                                                {props?.pageSubCaption}
                                            </h4>
                                        )
                                    }

                                })()}
                            </div>
                        </div>

                        {props.children}
                    </div>
                </div>
            </main>

            <div className="container bg-primary rounded">
                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-center text-white mb-0 mt-1">
                            John2Land.co.uk
                        </p>
                        <p className="text-center text-white mb-1 mt-0 textFooterSubheading">
                            18th anniversary edition
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-2"></div>
        </span>
    )
}

export default Page;