import React from "react";

class Login extends React.Component {
  state = {
    authorized: false,
    counter: 3,
    isDisable: false,
    timer: 15,
  };
  checkAuthorize = (e) => {
    e.preventDefault();
    const input = document.querySelector(".form-control");
    if (this.props.userInfo.password === input.value) {
      this.setState({ authorized: true });
    } else {
      this.setState({ counter: --this.state.counter });
      this.state.counter === 0
        ? this.enableInput()
        : alert(
            "You entered wrong password  !!! \nYour chance to try :  " +
              this.state.counter
          );
      input.value = "";
      input.focus();
    }
  };
  enableInput = () => {
    this.setState({ isDisable: true });

    const time = setInterval(
      () => this.setState({ timer: --this.state.timer }),
      1000
    );

    setTimeout(() => {
      clearInterval(time);
      this.setState({ isDisable: false, counter: 3 });
    }, 15000);
  };

  render() {
    const { userInfo } = this.props;
    let contact = (
      <div className="card">
        <div className="top">
          <h3 className="name">{userInfo.name}</h3>
          <img src={userInfo.imgURL} alt="avatar" className="circle-img" />
        </div>
        <div className="bottom">
          <h5 className="info">{userInfo.mail}</h5>
          <h5 className="info">{userInfo.phone}</h5>
        </div>
      </div>
    );
    let login = (
      <div className="card">
        <form className="form-inline" action="#" onSubmit={this.checkAuthorize}>
          <div className="form-group">
            <input
              disabled={this.state.isDisable}
              type="password"
              className="form-control mx-sm-3"
              placeholder="Password"
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.isDisable}
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <h3>
            {this.state.isDisable
              ? "Please wait " + this.state.timer + " sn"
              : ""}
          </h3>
        </div>
      </div>
    );

    return (
      <div id="authorization">
        {this.state.authorized ? (
          <h2>Contact Profile</h2>
        ) : (
          <h2>Enter the Password</h2>
        )}
        {this.state.authorized ? contact : login}
      </div>
    );
  }
}

export default Login;
