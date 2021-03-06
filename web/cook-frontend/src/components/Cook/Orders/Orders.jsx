import React from "react";

import Header from './Header'
import {Redirect, Route, Switch} from "react-router-dom";

import Body from "./Body";

function Orders(){
  const activeOrdersEndpoint = "/orders/";
  const completedOrdersEndpoint = "/orders/complete/";

  return(
    <div>
      <Switch>
        <Route exact path="/cook/orders">
          <Redirect to="/cook/orders/active" />
        </Route>
        <Route exact path="/cook/orders/active">
          {/*<ActiveOrders />*/}
          <Header tab={0}/>
          <Body ordersEndpoint={activeOrdersEndpoint} tab={'active'}/>
        </Route>
        <Route exact path="/cook/orders/completed">
          {/*<CompletedOrders />*/}
          <Header tab={1}/>
          <Body ordersEndpoint={completedOrdersEndpoint} tab={'completed'}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Orders;