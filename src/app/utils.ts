export function uglify(str: string) {
  return str
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, '_')
    .replace(/\W+/g, '');
}

export function UTCtoPresentable(utc: string) {
  const date = utc.slice(0, utc.indexOf('T'));
  const parts = date.split('-');
  return parts[2] + '/' + parts[1] + '/' + parts[0];
}

export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
