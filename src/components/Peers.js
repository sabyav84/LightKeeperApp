import React from "react";

const Peers = ({ peers, setQuoteName }) => {
  return (
    <div className='Peers'>
      <span>Peers </span>
      {peers.map((peer) => (
        <a
          key={Math.random()}
          className='peer-link'
          onClick={() => setQuoteName(peer)}>
          {peer}
        </a>
      ))}
    </div>
  );
};

export default Peers;
