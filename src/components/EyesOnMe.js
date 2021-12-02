import React from "react";

function EyesOnMe() {
    function hi () {
        console.log('Good!')
    }
    function lookAtMe() {
        console.log('Hey! Eyes on me!')
        }
  return (
    <div>
        <button onFocus={() => hi()}
        onBlur={() => lookAtMe()}
        >Eyes on me</button>
    </div>
  );
}

export default EyesOnMe;
