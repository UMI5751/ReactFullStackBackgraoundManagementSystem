import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

/*
App root components
 */
export default class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Routes> {/*only match 1 route every time*/}
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Admin/>}></Route>
          </Routes>
        </BrowserRouter>
    )

  }
}
