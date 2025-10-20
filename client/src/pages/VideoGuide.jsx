import React from 'react';

function VideoGuide() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Video Guide</h2>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/_LDR1_Prveo?si=VOtmzGoPpfihcYb6"
          title="Overview and History of Algebra"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoGuide;