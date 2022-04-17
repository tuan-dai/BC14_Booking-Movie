import React from "react";
import { Route } from "react-router-dom";
import Header from "../pages/HomeTemplates/_component/Header";
import Footer from "../pages/HomeTemplates/_component/Footer";

export const HomeTemplate = (props) => {
    let { Component, ...restProps } = props
    return <Route {...restProps} render={propsRoute => {
        return (
            <>
                <Header />
                < Component {...propsRoute} />
                <Footer />
            </>
        )
    }} />
}