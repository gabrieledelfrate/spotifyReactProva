import React from 'react';

const PlayerControls = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row justify-content-center playBar py-3">
        <div className="col-8 col-md-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerControls;
