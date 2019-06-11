import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

export default class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch, event) => {
    event.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { dispatch } = value;

          return (
            <div className="card card-body md-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> 歌詞検索
              </h1>
              <p className="lead text-center">歌詞を検索します</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control form-control-lg"
                    placeholder="曲名..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-info btn-lg btn-block mb-5"
                  type="submit"
                >
                  いざぁ
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
