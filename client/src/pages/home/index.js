import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
const LandingPage = (props) => {
  return (
    <div className="bg-gray-900">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center ">
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl pt-12 flex justify-center">
                  Welcome
                </h1>
                {props.isAuthenticated ? (
                  <div className="text-xl">
                    <h1 className="text-white text-3xl pt-8">
                      {props.userData.name}
                    </h1>
                  </div>
                ) : (
                  <p className="mt-4 text-lg text-gray-300">
                    <Link to="/auth/login">
                      <button
                        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit"
                      >
                        Login
                      </button>
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);