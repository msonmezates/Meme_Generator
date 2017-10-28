import React, { Component } from 'react';
import '../styles/index.css';

class CreateMyMemes extends Component {

  render() {
    return (
      <div>
        {
          this.props.myOwnMemes.map((meme, index) => {
            return (
              <div
                style={{display: 'inline-block'}}
                key={index}
              >
                <img
                  src={meme.url}
                  alt="my-personal-meme"
                  className="my-meme-img"
                />
                <div>
                  <a
                    className="download-btn"
                    href={meme.url}
                    download="google.png"
                  >
                    Download Your Meme
                  </a>
                </div>
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default CreateMyMemes;