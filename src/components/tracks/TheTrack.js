import React, { Component } from "react";
import { Link } from "react-router-dom";
const TheTrack = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          {/* <p>{track.track_name}</p> */}
          <p className="card-text">
            <strong>
              <i className="fa fa-play" />
              Track
            </strong>
            :{track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" /> Album
            </strong>
            :{track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fa fa-chevron-right" />
            歌詞を見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheTrack;
