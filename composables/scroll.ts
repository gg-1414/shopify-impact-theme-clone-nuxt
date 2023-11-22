import { onMounted, onUnmounted } from "vue";
import { throttle } from "~/utils/throttle";

export interface ScrollPosition {
  x: number;
  y: number;
}

export function useScroll(
  func: ({ x, y }: ScrollPosition) => void,
  wait: number
) {
  function update(this: Window) {
    func({ x: this.scrollX, y: this.scrollY });
  }

  const cb = throttle(update, wait);

  onMounted(() => window.addEventListener("scroll", cb));
  onUnmounted(() => window.removeEventListener("scroll", cb));

  return {};
}
