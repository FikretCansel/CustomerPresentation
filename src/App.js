import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFound from "./NotFound";
import ProductList from "./pages/ProductList";
import ForYouProductsLoading from "./pages/ForYouProductsLoading";
export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(true);

  return (
    <Switch>
      {/* <Route exact path="/login">
        <div className=" container">
          <LoginPage />
        </div>
      </Route> */}

      <Route exact path="/">
        <div className=" container">
          {!isLogedIn ? (
            <LoginPage setIsLogedIn={setIsLogedIn} />
          ) : (
            <>
              <Header />
              <Home />
            </>
          )}
        </div>
      </Route>
      {isLogedIn && (
        <>
          <Route exact path="/home">
            <div className=" container">
              <Header />
              <Home />
            </div>
          </Route>
          
          <Route exact path="/forYouProducts">
            <div className=" container">
              <Header />
              <ProductList />
            </div>
          </Route>
          <Route path="/for-you-loading">
            <ForYouProductsLoading />
          </Route>
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}
//  <Route exact path="/result">
//         <div className=" container">
//           <Header />
//           <ResultPage />
//         </div>
//       </Route>