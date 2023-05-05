import React from "react";

interface IPing {
  pingTrigger: boolean;
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Ping = ({ children, pingTrigger, style }: IPing) => {
  console.log(pingTrigger);
  return (
    <div className={`ds-ping${pingTrigger ? " ds-ping-animate" : ""}`} style={style}>
      {children}
    </div>
  );
};

export default Ping;
