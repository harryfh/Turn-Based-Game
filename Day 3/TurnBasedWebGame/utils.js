function rnd(val, max = null) {
  if (max != null) {
    // arg0 is min, 
    return val + (Math.floor(Math.random() * (max - val)));
  }
  return Math.floor(Math.random() * val);
}
/**
 * 
 * @param {HTMLDivElement} a 
 */
function animateElement(a, attr = "shake") {
  a.setAttribute(attr, true);
  setTimeout(() => a.setAttribute(attr, false), 1000);
}