const callOuter = (event) => {
  console.table([
    {
      Description: "I am the outer one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
};

const callMiddle = () => {
  console.table([
    {
      Description: "I am the Middle one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
};

const callInner = (event) => {
  console.table([
    {
      Description: "I am the Inner one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
  // event.stopPropagation();
};

//   By default is the bubbling phase
document.getElementById("outer").addEventListener("click", callOuter);
document.getElementById("middle").addEventListener("click", callMiddle);
document.getElementById("inner").addEventListener("click", callInner);

// To achieve event capturing, you can use the third parameter of the addEventListener method, which specifies whether the event should be captured during the capturing phase. Setting it to true will activate the capturing phase.
// document.getElementById("outer").addEventListener("click", callOuter, true);
// document.getElementById("inner").addEventListener("click", callInner, true);
// document.getElementById("middle").addEventListener("click", callMiddle, true);
