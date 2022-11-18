import "./Processing.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const LoadingBar = (props) => {
  const { percentage } = props;

  return (
    <div className="LoadingBar">
      <div className="LoadingBar__bar" style={{ width: `${percentage}%` }} />
    </div>
  );
};

const Loader = (props) => {
  const { requirements, loadingID, onComplete } = props;
  const [progress, setProgress] = useState(0);
  const loaded = progress >= 100;

  // Run each loading task in async
  const load = async () => {
    setProgress(0);

    const currentId = loadingID;
    requirements.forEach((requirement) => {
      requirement.load().then((val) => {
        if (currentId === loadingID) {
          setProgress((progress) => progress + val);
        }
      });
    });
  };

  useEffect(() => {
    load();
  }, [requirements, loadingID]);

  useEffect(() => {
    if (loaded) {
      onComplete();
    }
  }, [loaded]);

  return (
    <div className="Loader">
      <LoadingBar percentage={progress} />
      <span className="Loader__text">
        {
          <>
            {loaded ? "Processing Done!" : "Processing"} - {progress}%
          </>
        }
      </span>
    </div>
  );
};

const fakeLoadingTask = (ms, progressAmount) => {
  return new Promise((resolve) => setTimeout(resolve, ms, progressAmount));
};

// Using timeouts to fake async loading tasks (files, downloads etc)
const requirements = [
  {
    load: async () => {
      return fakeLoadingTask(3000, 30);
    },
  },
  {
    load: async () => {
      return fakeLoadingTask(5000, 25);
    },
  },
  {
    load: async () => {
      return fakeLoadingTask(7500, 25);
    },
  },
  {
    load: async () => {
      return fakeLoadingTask(9000, 15);
    },
  },
  {
    load: async () => {
      return fakeLoadingTask(10000, 5);
    },
  },
];

const Processing = (props) => {
  const [id, setId] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const restartLoading = () => {
    setId((id) => id + 1);
    setLoaded(false);
  };

  const onComplete = () => {
    setLoaded(true);
  };

  return (
    <div className="App">
      <Loader
        requirements={requirements}
        onComplete={onComplete}
        loadingID={id}
      />
      {props.userData.user_type == "Student" ||
      props.userData.user_type == "Teacher" ? (
        <>
          {loaded && (
            <div className="text-center">
              <span className="px-5">Verification done !</span>
              <Link
                to="/user/profile"
                className="text-blue-300 hover:text-blue-500"
              >
                View Status
              </Link>
            </div>
          )}
        </>
      ) : (
        <>{loaded && <div className="text-center">Food is Healthy to eat !</div>}</>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
}
function mapActionToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapActionToProps)(Processing);
