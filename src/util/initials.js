export function initials(name) {
  let [first, second] = name.split(" ");

  if (!second) {
    second = first[1] ?? first[0];
  }
  return (first[0] + second[0]).toUpperCase();
}
