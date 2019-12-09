import React, { Component } from "react";
import Lottie from "react-lottie";
import animationBoyGirl from "./animationData/animationBoyGirl";

class AnimationBoyGirl extends Component {
  state = { isToggled: false, isStopped: false };

  render() {
    return (
      <button className="animationWrapperButton"
        style={{ border: "none", outline: "none", backgroundColor: "transparent" }}
        onClick={() => {
          this.setState({
            isToggled: !this.state.isToggled
          });
        }}
      >
        <Lottie
          direction={this.state.isToggled ? 1 : -1}
          //speed={1}
          options={{
            animationData:animationBoyGirl,
            loop: false
          }}
          isStopped={!this.state.isToggled}
          height={500}
          width={370}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                this.setState({ isToggled: !this.state.isToggled });
              }
            }
          ]}
        />
      </button>
    );
  }
}

export default AnimationBoyGirl;