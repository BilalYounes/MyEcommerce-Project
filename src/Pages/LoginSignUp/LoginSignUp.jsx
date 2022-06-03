import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import "./LoginSignUp.css";

const Errors = styled.small`
  display: flex;
  margin-left: 10px;
  color: red;
`;

const LoginSignUp = () => {
	const[errorlog,setErrorlog]=useState(true);
	const[errorsign,setErrorsign]=useState(true);
  const {
	
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
//   console.log(errors);

  const [SignUp, Setsignup] = useState("");
  const handalingErrorslog = () => {
    setErrorlog(true)
	setErrorsign(false)
  };
  const handalingErrorssign = () => {
    setErrorlog(false)
	setErrorsign(true)
};
 
//  switch between log in and sin up
  const SinUpSwich = () => {
    Setsignup("right-panel-active");
  };
  //switch between log in and sin up
  const Login = () => {
    Setsignup("");
  };

  return (
    <div className="containerWrraper">
      <div className={`container ${SignUp}`} id="container">
        <div className="form-container sign-up-container">
          <form
            onSubmit={handleSubmit((data) => {
                
            })}
          >
            <h1 className="h1">Create Account</h1>
            {/* <div className="social-container">
				<a  href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div> */}
            <span className="span">Enter your email for registration</span>
            <input
              className="input"
              {...register("Name", { required: "the Name is required" })}
              placeholder="Enter your name"
            />
            {errorsign&& errors.Name && <Errors>this filed is required</Errors>}
            <input
              {...register("Email", { required: "the Email is required" })}
              placeholder="Enter your Email"
            />
            {errorsign&&errors.Email && <Errors>this filed is required</Errors>}
            <input
              type="password"
              {...register("password", {
                required: "the password required",
                minLength: {
                  value: 6,
                  message: "the password is too short",
                },
				pattern:{
					value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
					message:"Write least one letter and one number"
				}
              })}
              placeholder="Enter your password"
            />
            {errorsign&&errors.password && <Errors>{errors.password.message}</Errors>}

            <button onClick={handalingErrorssign}  className="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            onSubmit={handleSubmit((data) => {
            //   console.log(data);
            })}
          >
            <h1 className="h1">Sign in</h1>

            <span className="span"> Use your account</span>
            <input
              {...register("Emaillog", { required: "the Email is required" })}
              placeholder="Enter your Email"
            />
            {errorlog&& errors.Emaillog&& (
              <Errors>this filed is required</Errors>
            )}
             <input
              type="password"
              {...register("passwordlog", {
                required: "the password required",
                minLength: {
                  value: 6,
                  message: "the password is too short",
				  
                },
				pattern:{
					value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
					message:"Write at least one letter and one number"
				}
              })}
              placeholder="Enter your password"
            />
            {errorlog&&errors.passwordlog && <Errors>{errors.passwordlog.message}</Errors>}
            <p className="p">Forgot your password?</p>
            <button onClick={ handalingErrorslog} className="button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1">Welcome Back!</h1>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button onClick={Login} className="button ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1">Hello, Friend!</h1>
              <p className="p">
                Enter your personal details and start journey with us
              </p>
              <button onClick={SinUpSwich} className="button ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <p className="p">
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer> */}
    </div>
  );
};

export default LoginSignUp;
