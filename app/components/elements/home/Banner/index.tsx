import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <div className="card-1">
        <h2>Card</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="card card-2">
        <h3>UI Components</h3>
        <p>
          Tabs, buttons, inputs, lists, cards, and more! A comprehensive library
          of mobile UI components, ready to go.
        </p>
      </div>

      <img src="/static/banner3.svg" alt="" className="banner-image" />
    </div>
  );
}
