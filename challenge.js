export function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;
  // I simplified this code into a single action below
  // if (Object.is(a, 0) && Object.is(b, -0)) return true;
  // if (Object.is(a, -0) && Object.is(b, 0)) return true;
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  )
    return true;
  return Object.is(a, b);
}
