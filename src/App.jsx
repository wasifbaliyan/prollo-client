// import { Center } from "@chakra-ui/layout";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import BoardDetails from "./pages/BoardDetails";
import Boards from "./pages/Boards";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/">
          <Layout>
            <Boards />
          </Layout>
        </PrivateRoute>
        <PrivateRoute path="/boards/:id">
          <Layout>
            <BoardDetails />
          </Layout>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
