export function joinList(items = []) {
  return items.filter(Boolean).join(" / ");
}

export function slugify(value = "") {
  return value.toLowerCase().replace(/\s+/g, "-");
}
