export function parseForm(e) {
  let form = new FormData(e.target);

  return Object.fromEntries(form.entries());
}
