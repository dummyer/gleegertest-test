import React from "react";
import "./home.css";
import { Circle } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

function home() {
  return (
    <div className="page">
      <div className="pageContent">
        <div className="containers">
          <div className="leftCol">
            <h2 className="welcomeLabel">Welcome.</h2>
          </div>
          <div className="rightCol">
            <div className="statusCard">
              <div className="leftCol">
                <div className="leftRow">
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">Country</div>
                    </div>
                    <div className="textRow">
                      <div className="textCol bold">
                        Test@sparrowexchange.com
                      </div>
                    </div>
                  </div>
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">User ID</div>
                    </div>
                    <div className="textRow">
                      <div className="textCol bold">
                        00ddd4c4-b0b3-4df3-a694-0b8e1007be2e
                      </div>
                    </div>
                  </div>
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">Account Status </div>
                    </div>
                    <div className="textRow">
                      <div className="iconCol">
                        <Circle className="iconColStyle verifiedIcon" />
                      </div>
                      <div className="textCol bold">Verified</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightCol">
                <div className="leftRow">
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">&nbsp;</div>
                    </div>
                    <div className="textRow">
                      <div className="textCol bold">IDN</div>
                    </div>
                  </div>
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">Joined Since</div>
                    </div>
                    <div className="textRow">
                      <div className="textCol bold">12Feb21</div>
                    </div>
                  </div>
                  <div className="containerText">
                    <div className="textRow">
                      <div className="textCol">2FA Status</div>
                    </div>
                    <div className="textRow">
                      <div className="iconCol">
                        <Circle className="iconColStyle notverifiedIcon" />
                      </div>
                      <div className="textCol bold">
                        Disabled |
                        <a class="linkStyle" href="#">
                          Enable
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <br></br>
        <div className="containers">
          <div className="leftCol">
            <div className="container">
              <div className="groupContainer">
                <div className="row subTitle">
                  <div className="col text-left">
                    <div className="row">
                      <div className="col text-left">
                        <h3>Last Login</h3>
                      </div>
                      <div className="col text-end">
                        <a href="#">See all Activities</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subTitleContent">
                  <div className="row">
                    <div className="col text-left">
                      <b>30Jan21, 16:28, Chrome Mac OS X</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row subTitle">
                <div className="col text-left">
                  <div className="row">
                    <div className="col text-left">
                      <h3>My Products</h3>
                    </div>
                    <div className="col text-end">
                      <a href="#">See all Activities</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subTitleContent">
                <div className="row listContent">
                  <div className="col wLeft">
                    <div className="row">
                      <div className="col text-left">
                        <b>ConvertNOW</b>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-left">
                        <span className="smallLabel">Required</span>
                      </div>
                    </div>
                  </div>
                  <div className="col text-end wRight">
                    <label className="labelSwitch">Enabled</label>
                    <label className="switch">
                      <input type="checkbox" defaultChecked="false" disabled />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="row listContent">
                  <div className="col wLeft">
                    <div className="row">
                      <div className="col text-left">
                        <b>ConvertNOW</b>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-left">
                        <span className="smallLabel">Required</span>
                      </div>
                    </div>
                  </div>
                  <div className="col text-end wRight">
                    <label className="labelSwitch">Enabled</label>
                    <label className="switch">
                      <input type="checkbox" defaultChecked="true" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="row listContent lastListContent">
                  <div className="col wLeft">
                    <div className="row">
                      <div className="col text-left">
                        <b>ConvertNOW</b>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-left">
                        <span className="smallLabel">Required</span>
                      </div>
                    </div>
                  </div>
                  <div className="col text-end wRight">
                    <label className="labelSwitch">Enabled</label>
                    <label className="switch">
                      <input type="checkbox" defaultChecked="true" disabled />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightCol">
            <div className="container">
              <div className="groupContainer">
                <div className="row">
                  <div className="col text-left">
                    <div className="row">
                      <div className="col text-left">
                        <h3>Last Login</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subTitleContent">
                  <div className="row">
                    <div className="col text-left">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Assets</th>
                            <th>Total</th>
                            <th>Available</th>
                            <th>Locked</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="labelLogo">
                                <img
                                  className="logoLabel"
                                  src="/dist/assets/icons/ic_sp.svg"
                                />
                                <span className="label">SP$</span>
                              </div>
                            </td>
                            <td>888,8888,888.00</td>
                            <td>888,8888,888.00</td>
                            <td>888,8888,888.00</td>
                            <td>...</td>
                          </tr>
                          <tr className="listTableContent">
                            <td>
                              <div className="labelLogo">
                                <img
                                  className="logoLabel"
                                  src="/dist/assets/icons/ic_btc.svg"
                                />
                                <span className="label">BTC</span>
                              </div>
                            </td>
                            <td>
                              <div className="row">
                                <div className="col">888,8888,888.00</div>
                              </div>
                              <div className="row">
                                <div className="col">~888,888,888.88 USD</div>
                              </div>
                            </td>
                            <td>
                              <div className="row">
                                <div className="col">888,8888,888.00</div>
                              </div>
                              <div className="row">
                                <div className="col">~888,888,888.88 USD</div>
                              </div>
                            </td>
                            <td>
                              <div className="row">
                                <div className="col">888,8888,888.00</div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <h6>~888,888,888.88 USD</h6>
                                </div>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
