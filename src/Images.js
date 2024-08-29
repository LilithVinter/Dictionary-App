import React from "react";

export default function images(props) {
  if (props.photos) {
    return (
      <div className="galleryContainer">
        <h3>Image Gallery</h3>
        <div className="row">
          {props.photos.map(function (gallery, index) {
            return (
              <div className="col-4" key={index}>
                <a href={gallery.url} target="_blank" rel="noreferrer noopener">
                  <img
                    src={gallery.src.landscape}
                    className="img-fluid"
                    alt={gallery.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
