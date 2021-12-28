import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import LoginForm from "./Components/LoginSignUp/LoginForm";
import Footer from "./Components/Footer";
import UseEffect from "./Components/UseEffect";
import Table from "./Components/Table";
import ComingSoon from "./Pages/ComingSoon";
import SignUp from "./Components/LoginSignUp/Signup";
import UserTable from "./Components/UserTable";
import ApiTable from "./Components/ApiTable";
import Axios from "./Components/AxiosapiTable";
import ContextApiTable from "./Components/ContextApiTable";
import ContextAxios from "./Context/AxiosApi";
import Whatsapp from "./Components/WhatsApp";
import "./App.css";
import Hoc from "./Components/Hoc";
import Counter from "./Components/Counter";

import ReduxApiTable from "./Components/ReduxApiTable";
import ReduxApiTableFc from "./Components/ReduxApiTableFc";

function App() {
  return (
    <div className="App">
      <Header />
      <Whatsapp />
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/reduxapitable">
          <ReduxApiTable />
        </Route>
        <Route path="/reduxapitablefc">
          <ReduxApiTableFc />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/useeffect">
          <UseEffect />
        </Route>
        <Route path="/comingsoon">
          <ComingSoon />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/usertable">
          <UserTable />
        </Route>
        <Route path="/apitable">
          <ApiTable />
        </Route>
        <Route path="/axios">
          <Axios />
        </Route>
        <Route path="/hoc">
          <Hoc />
        </Route>
        <Route path="/contextapi">
          <ContextAxios>
            <ContextApiTable />
          </ContextAxios>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

