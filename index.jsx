import React from "react";
import { PropertyDefault } from "./PropertyDefault";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import "./style1.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="div-2">
        <div className="overlap-group">
          <div className="frame-2">
            <div className="text-wrapper-3">Sign In</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">Sign In</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">Sign In</div>
          </div>
        </div>
        <div className="frame-3">
          <PropertyDefault className="component" />
          <PropertyDefaultWrapper
            className="property-1-default"
            fluentEyeFilled="image.svg"
            frameClassName="property-default-instance"
          />
          <div className="text-wrapper-4">Forgot Password?</div>
        </div>
        <div className="don-t-have-account-wrapper">
          <p className="don-t-have-account">
            <span className="span">Don’t have account?</span>
            <span className="text-wrapper-5">&nbsp;</span>
            <span className="text-wrapper-6">Sign Up</span>
          </p>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-7">Sign In</div>
        </div>
        <div className="text-wrapper-8">7:11</div>
        <img className="group" alt="Group" src="group.png" />
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
    </div>
  );
};
