// Vector format [x, y, z]

export function add(a, b) {
  return [
    a[0] + b[0],
    a[1] + b[1],
  ];
}

export function sub(a, b) {
  return [
    a[0] - b[0],
    a[1] - b[1],
  ];
}

export function cross(a, b) {
  return [
    (a[1] * b[0]) - (a[0] * b[1]),
    (a[0] * b[1]) - (a[1] * b[0]),
  ];
}

export function magnitude(vec) {
  return Math.sqrt((vec[0] * vec[0]) + (vec[1] * vec[1]));
}

export function scale(vec, s) {
  return [
    vec[0] * s,
    vec[1] * s,
  ];
}

export function normalize(vec) {
  return scale(vec, 1 / magnitude(vec));
}