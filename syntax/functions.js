/**
 * @callback Operation
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {Operation} callback
 * @returns
 */
function muvelet(a, b, callback) {
  const result = callback(a, b);
  return { result };
}

/**
 *
 * @param {"+" | "-" | "*"} jel
 * @returns {Operation}
 */
function muveletLetrehoz(jel) {
  if (jel == "+") {
    return (a, b) => a + b;
  } else if (jel == "-") {
    return (a, b) => a - b;
  } else {
    return (a, b) => a * b;
  }
}

export { muvelet, muveletLetrehoz };
