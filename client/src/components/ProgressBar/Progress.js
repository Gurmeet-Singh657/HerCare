import "./progress.css";
import { useState } from "react";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <>
      <div className="progresscont">
        <div className="progress-text">{done}% Completed</div>
        <div className="progress">
          <div className="progress-done" style={style}></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
