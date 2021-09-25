// import { Center } from "@chakra-ui/layout";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BoardDetails from "./pages/BoardDetails";
import Boards from "./pages/Boards";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Boards />
          </Layout>
        </Route>
        <Route path="/boards/:id">
          <Layout>
            <BoardDetails />
          </Layout>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
