import "./intro.css";
import Me from "../../images/cartoon.png"

const Intro = () => {
  return (
    <div className="me">
      <div className="me-left">
        <div className="me-left-wrapper">
          <h2 className="me-intro">Hi, my name is</h2>
          <h1 className="me-name">Pablo Martínez</h1>
          <div className="me-title">
              <div className="me-title-wrapper">
                  <div className="me-title-item">Full Stack Web Developer</div>
                  <div className="me-title-item-lole">(you can call me Lole)</div>
              </div>
          </div>
          <p className="me-description">
            Finding my path in this wonderful world, and learning all the time.
          </p>          
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="cadetblue"
          className="me-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokewiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="me-right">
          <div className="me-background"></div>
          <img src={Me} alt="pic of me" className="me-img" />
      </div>
    </div>
  );
};

export default Intro;
