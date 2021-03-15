import NavbarIntroduction from "app/components/elements/introduction/navbar-introduction";
import { Component } from "react";

const withNavbar = (OriginalComponent) => {
  class MC extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      //   console.log(123);
      return (
        <div>
          <NavbarIntroduction />
          <OriginalComponent />
        </div>
      );
    }
  }
  return MC;
};
export default withNavbar;
