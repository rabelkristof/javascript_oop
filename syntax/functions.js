function muvelet(a, b, callback) {
  const result = callback(a, b);
  return { result };
}

function muveletLetrehoz(jel) {
  if (jel == "+") {
    return (a, b) => a + b;
  }
}

export { muvelet, muveletLetrehoz };
