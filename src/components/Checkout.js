import React from "react";
import _ from "lodash";

import "./styles.scss";

const Checkout = () => {
  const packages = [
    {
      planType: "SIMO",
      bundle: {
        name: "An awesome Unlimited SIM deal here"
      }
    },
    {
      planType: "HANDSET",
      bundle: {
        name: "Nokia 3310"
      }
    }
  ];

  const names = packages.map(pack => {
    return _.get(pack, "bundle.name", "a default name");
  });

  return (
    <div className="checkout">
      <h1>Your package(s)</h1>
      <ul>
        {names.map(name => {
          return (
            <li key={name}>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Checkout };
