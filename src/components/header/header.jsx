import "./header.css";
import {
  Person,
  Public,
  ArrowDropDown,
  Notifications,
  ArrowDropUp,
} from "@mui/icons-material";
import React, { Component, useCallback } from "react";

class Header extends Component {
  toggleSidebar() {
    alert(this.props.sideBarOpen);
  }

  render() {
    return (
      <div class="topbar">
        <div className="topbarWrapper">
          <div className="mobileTopbar">
            <div className="row contentTopbarMobile">
              <div className="col">
                <Notifications className="topbarMobileIcon" />
                <span className="notifBullet"></span>
              </div>
              <div className="col text-end">
                <a href="#">LOG OUT</a>
              </div>
            </div>

          </div>

          <div className="topLeft">

            <img
              src="/dist/assets/logo/sparrow_logo.svg"
              alt=""
              className="logo"
            />
            <div className="labelWrapperContainer">
              <div className="welcomeMobile">
                <div className="row">
                  <div className="col"><b>Welcome.</b></div>
                </div>
                <div className="row">
                  <div className="col"><span>eddie.yeo@gleeger.com</span></div>
                </div>
              </div>
              <div className="labelWrapper">
                <div className="labelSum separatorOpacity">
                  <div className="title">
                    <div className="icon">
                      <img
                        src="/dist/assets/icons/ic_bitcoin.svg"
                        alt=""
                        className="src"
                      />
                    </div>
                    <div className="name">Bitcoin</div>
                  </div>
                  <div className="sum">88,888.88</div>
                  <div className="minMaxSum">
                    <ArrowDropUp className="minMaxIcon minMaxIcon-success" />
                    <span className="minMaxLabel">3,023.17</span>
                  </div>
                </div>
                <div className="labelSum">
                  <div className="title">
                    <div className="icon">
                      <img
                        src="/dist/assets/icons/ic_ethereum.svg"
                        alt=""
                        className="src"
                      />
                    </div>
                    <div className="name">Etherium</div>
                  </div>
                  <div className="sum">88,888.88</div>
                  <div className="minMaxSum">
                    <ArrowDropDown className="minMaxIcon minMaxIcon-danger" />
                    <span className="minMaxLabel">3,023.17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topRight">
            <div className="topMenu">
              <div className="topMenuWrapper">
                <ul>
                  <li>
                    <div className="topMenuContentWrap">
                      <img
                        src="/dist/assets/icons/ic_topmenu_convertNow.svg"
                        alt=""
                        className="topMenuLogo"
                      />
                      <div className="topMenuLabel">ConvertNOW</div>
                    </div>
                  </li>
                  <li>
                    <div className="topMenuContentWrap">
                      <img
                        src="/dist/assets/icons/ic_topmenu_options.svg"
                        alt=""
                        className="topMenuLogo"
                      />
                      <div className="topMenuLabel">Options</div>
                    </div>
                  </li>

                  <li>
                    <div className="topMenuContentWrap">
                      <img
                        src="/dist/assets/icons/ic_topmenu_options.svg"
                        alt=""
                        className="topMenuLogo"
                      />
                      <div className="topMenuLabel">Funds</div>
                    </div>
                  </li>

                  <li>
                    <div className="topMenuContentWrap">
                      <img
                        src="/dist/assets/icons/ic_topmenu_options.svg"
                        alt=""
                        className="topMenuLogo"
                      />
                      <div className="topMenuLabel">Support</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="topMenuWrapper">
                <div className="option">ConvertNOW</div>
                <div className="option">Options</div>
                <div className="option">Funds</div>
                <div className="option">Support</div>
              </div> */}
              <div className="topbarIconContainer">
                <div className="badgeButton">Settlement Price</div>
              </div>
              <div className="topbarIconContainer separator">
                <Person className="topbarIcon" />
                <ArrowDropDown className="topbarIcon topbarIconDropDown" />
              </div>
              <div className="topbarIconContainer">
                <Public className="topbarIcon" />
                <ArrowDropDown className="topbarIcon topbarIconDropDown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
