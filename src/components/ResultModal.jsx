import { 
  , useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = 
(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formatRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost && <h2>Your Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>
          {formatRemainingTime} second{formatRemainingTime > 1 ? "s" : ""} left.
        </strong>
      </p> 
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
