import React from "react";

export default function Admin() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Admin</span>
      </h1>
      <br />
      <br />
      <hr />
      <div className="container">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">If you are here, you are lost! Skiddadle!</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
