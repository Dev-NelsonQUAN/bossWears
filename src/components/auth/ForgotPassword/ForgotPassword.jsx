import React from "react";
import "./ForgotPassword.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router";
import axios from "axios";

const ForgotPassword = () => {
  const Nav = useNavigate();

  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()

  const handleForgotPassword = async (e) => {
    e.preventDefault()

    if (!email) {
      toast.error("Pls kindly enter your email")
    } else {
      const apiData = { email }
      const url = "https://boss-wear.onrender.com/api/v1"

      try {
        setLoading(true)
        const res = await axios.post(`${url}/forgot`, apiData)
      }
      catch (err) {
        console.log(err)
      }
    }


  }

  return (
    <div className="ForgotPHolder">
      <Header />

      <form className="forgotDown"
        onSubmit={handleForgotPassword}
      >
        <div className="fDownTxt">
          <label className="fResetText"> Reset Password</label>

          <p className="forgotP">
            {" "}
            Enter the email address <br /> associated with this account{" "}
          </p>
        </div>

        <div className="forgotPBot">
          <div className="fPInputOne">
            <div className="fPHold">
              <p className="fPEmail"> Email </p>
              <input
                className="fPInput"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
          </div>

          <div className="fPBtnATxt">
            <button className="resetPBtn" 
            type="submit"
            onClick={() => Nav("/reset")}>
              {" "}
              Reset Password{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
