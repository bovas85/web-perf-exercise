import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import _ from "lodash";

import "./styles.scss";

class Basket extends React.Component {
  state = {
    time: moment().format("h:mm:ss a")
  };

  // set interval property
  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      const time = moment().format("h:mm:ss a");

      this.setState({
        time
      });
    }, 1000);
  }

  render() {
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
      <div className="basket">
        <p>Time now: {this.state.time || ""}</p>
        <ul>
          {names.map(name => {
            return (
              <li key={name}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
        <Link to="/checkout">
          <button>Go to checkout</button>
        </Link>
      </div>
    );
  }
}

export { Basket };
