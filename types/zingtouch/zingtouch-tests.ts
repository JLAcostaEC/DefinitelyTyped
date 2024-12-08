import ZingTouch from 'zingtouch';

let swipe = new ZingTouch.Swipe({
  numInputs: 1,
  escapeVelocity: 0.75,
  maxRestTime: 100
});

let tap = new ZingTouch.Tap({
  numInputs: 1,
  maxDelay: 200,
  minDelay: 10,
  tolerance: 1
});

let expand = new ZingTouch.Expand({
  threshold: 1.5
});