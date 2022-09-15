import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <div>Welcome</div>
      <Route path="/welcome/new-user">
        <p>Welcome! New-user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
