import React from "react";
import testImage from "../../assets/images/test-image.svg";

const TestComponent3 = () => {
  return (
    <div className="branch-root-first">
      <div className="line">
        <img className="poster1" src={testImage} />
        <div className="line">
          <img className="poster2" src={testImage} />
          <div className="branch-root-second">
            <div className="line">
              <img className="poster4" src={testImage} />
              <div className="line">
                <img className="poster5" src={testImage} />
                <div className="branch-root-third">
                  <div className="line">
                    <img className="poster4" src={testImage} />
                    <div className="line">
                      <img className="poster5" src={testImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line">
            <img className="poster3" src={testImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent3;
