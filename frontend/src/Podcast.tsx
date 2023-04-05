import React from 'react';
import styles from './Podcast.module.css';

function Podcast(props: any) {
  return (
    <>
      <div className="col">
        <iframe
          src="https://baconsale.com/"
          width="100%"
          height="600px"
          title="Baconsale Podcast"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </>
  );
}

export default Podcast;
