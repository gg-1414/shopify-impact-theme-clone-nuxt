export function throttle(func: () => void, wait: number) {
  let waiting = false;

  return function () {
    if (waiting) {
      return;
    }

    waiting = true;
    setTimeout(function (this: any) {
      func.apply(this);
      waiting = false;
    }, wait);
  };
}
