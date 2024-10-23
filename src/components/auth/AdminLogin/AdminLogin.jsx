import React, { useState } from "react";
import "./AdminLogin.css";
import Header from "../../Pages/Header/Header";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AdminLogin = () => {
  const Nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all details");
      return;
    }

    const apiData = { email, password };
    const url = "https://boss-wear-t7uu.onrender.com/login";

    try {
      setLoading(true);
      const res = await axios.post(url, apiData);
      console.log(res);

      if (res.status === 200) {
        const { token } = res.data;
        localStorage.setItem("token", token);
        toast.success("Welcome, Admin");
        Nav("/add-item");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="adminLoginHolder">
        <Header />
        <form className="adLogBottom" onSubmit={handleLogin}>
          <div className="topTxt">
            <label className="welcomeAdminText">
              Welcome to Admin <br /> Control Panel
            </label>
            <p className="loginP">Login</p>
          </div>
          <div className="botBot">
            <div className="logInputs">
              <div className="logEmailHold">
                <p className="logEmail">Email</p>
                <input
                  className="logInput"
                  type="text"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email"
                />
              </div>
              <div className="logPasswordHold">
                <p className="logPassword">Password</p>
                <div className="innerPassW">
                  <input
                    type={seePassword ? "text" : "password"}
                    className="logInputP"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                  />
                  {seePassword ? (
                    <FaRegEye onClick={() => setSeePassword(false)} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setSeePassword(true)} />
                  )}
                </div>
              </div>
            </div>
            <div className="logBtnATxt">
              <p className="fPass" onClick={() => Nav("/forgot")}>
                Forgot Password?
              </p>
              <button className="loginB" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default AdminLogin;


// import React, { useState } from "react";
// import "./AdminLogin.css";
// import Header from "../../Pages/Header/Header";
// import { useNavigate } from "react-router-dom"; // Ensure this is the correct import
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";

// const AdminLogin = () => {
//   const Nav = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [seePassword, setSeePassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all details");
//       return;
//     }

//     const apiData = { email, password };
//     const url = "https://boss-wear-t7uu.onrender.com/api/v1/login";

//     try {
//       setLoading(true);
//       const res = await axios.post(url, apiData);
//       console.log(res); // Check the response

//       // Check if the response is successful
//       if (res.status === 200) {
//         const { token } = res.data; // Adjust according to your API response
//         localStorage.setItem("token", token); // Store token
//         toast.success("Welcome, Admin");
//         Nav("/add-item"); // Navigate to add-item
//       } else {
//         toast.error("Login failed");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="adminLoginHolder">
//         <Header />
//         <form className="adLogBottom"
//           onSubmit={handleLogin}>
//           <div className="topTxt">
//             <label className="welcomeAdminText">
//               Welcome to Admin <br /> Control Panel
//             </label>
//             <p className="loginP">Login</p>
//           </div>
//           <div className="botBot">
//             <div className="logInputs">
//               <div className="logEmailHold">
//                 <p className="logEmail">Email</p>
//                 <input
//                   className="logInput"
//                   type="text"
//                   placeholder="Enter Email Address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   aria-label="Email"
//                 />
//               </div>
//               <div className="logPasswordHold">
//                 <p className="logPassword">Password</p>
//                 <div className="innerPassW">
//                   <input
//                     type={seePassword ? "text" : "password"}
//                     className="logInputP"
//                     placeholder="Enter Your Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     aria-label="Password"
//                   />
//                   {seePassword ? (
//                     <FaRegEye onClick={() => setSeePassword(false)} />
//                   ) : (
//                     <FaRegEyeSlash onClick={() => setSeePassword(true)} />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="logBtnATxt">
//               <p className="fPass" onClick={() => Nav("/forgot")}>
//                 Forgot Password?
//               </p>
//               <button className="loginB" type="submit" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <Toaster position="30px"/>
//     </>
//   );
// };

// export default AdminLogin;



// import React, { useState } from "react";
// import "./AdminLogin.css";
// import Header from "../../Pages/Header/Header";
// import { useNavigate } from "react-router";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import toast from "react-hot-toast";
// import axios from "axios";

// // https://boss-wear.onrender.com

// const AdminLogin = () => {
//   const Nav = useNavigate()

//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const [seePassword, setSeePassword] = useState(false)
//   const [checkPassword, setCheckPassword] = useState()
//   const [loading, setLoading] = useState(false)

//   const handleLogin = async (e) => {
//     e.preventDefault()

//     if (!email || !password) {
//       toast.error("Pls kindly fill all details")
//     }
//     else {
//       const apiData = { email, password }
//       const url = "https://boss-wear.onrender.com/api/v1"

//       try {
//         setLoading(true)
//         const res = await axios.post(`${url}/login`, apiData)
//         toast.success("Welcome, Admin")
//         Nav("/add-item")
//       }
//       catch (error) {
//         toast.error("This an error")
//       }
//     }

//   }

//   const viewPassword = () => {
//     setSeePassword(true)
//   }


//   return (
//     <div className="adminLoginHolder">
//       <Header />

//       <form className="adLogBottom"
//         onSubmit={handleLogin}
//       >
//         <div className="topTxt">
//           <label className="welcomeAdminText">
//             {" "}
//             Welcome to Admin <br /> Control Panel
//           </label>

//           <p className="loginP"> Login </p>
//         </div>

//         <div className="botBot">
//           <div className="logInputs">
//             <div className="logEmailHold">
//               <p className="logEmail"> Email </p>
//               <input
//                 className="logInput"
//                 type="text"
//                 placeholder="Enter Email Address"
//               />
//             </div>

//             <div className="logPasswordHold">
//               <p className="logPassword"> Password </p>
//               <div className="innerPassW">
//                 <input
//                   type={seePassword ? "text" : "password"}
//                   className="logInputP"
//                   placeholder="Enter Your password"
//                 />

//                 {
//                   seePassword
//                     ?
//                     <FaRegEye onClick={() => setSeePassword(false)} />
//                     :
//                     <FaRegEyeSlash onClick={viewPassword} />
//                 }


//               </div>
//             </div>
//           </div>

//           <div className="logBtnATxt">
//             <p className="fPass" onClick={() => Nav("/forgot")}> Forgot Password? </p>
//             <button className="loginB"
//               type="submit"
//             > Login </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
