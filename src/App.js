import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <hearder>
        <MainHeader />
      </hearder>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome' /> 
            {/* Redirect to another page */}
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product-detail/:productID">
            {/* dynamic Routes with Params. useParams catches whatever wriitten in the place of '/:productID'  */}
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
