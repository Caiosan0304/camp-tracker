// src/routes.tsx
import { Route } from "wouter-preact";

import Login      from "./pages/Login";
import Dashboard  from "./pages/Dashboard";
import Layout from "./Layout";

const Routes = () => (
  <Layout>
    <Route path="/"    component={Login} />
    <Route path="/app" component={Dashboard} />
  </Layout>
);

export default Routes;
