// Bubble background animation with tab pause/resume
function startBubbles() {
  return new WarpSpeed("bubbles", {
    speed: 1,
    speedAdjFactor: 0.1,
    density: 1,
    shape: "circle",
    warpEffect: false,
    depthFade: true,
    starSize: 10,
    backgroundColor: "#ffffff",
    starColor: "#6094b5"
  });
}

let bubbles = startBubbles();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cancelAnimationFrame(bubbles.animationFrame);
    bubbles = null;
  } else {
    bubbles = startBubbles();
  }
});
