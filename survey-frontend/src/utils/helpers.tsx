export function concatClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}