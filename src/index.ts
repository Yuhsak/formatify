const escapeRegExp = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")

const createFormatRegExp = (begin: string, end: string) => {
  const b = escapeRegExp(begin)
  const e = escapeRegExp(end)
  return new RegExp(`((?<!(${b}))(${b}){1,2}(?!(${b})))(.*?)((?<!(${e}))(${e}){1,2}(?!(${e})))`, 'g')
}

export type FormatOption = {
  begin?: string
  end?: string
}

export function format<T extends Array<any>>(str: string, replacer?: T, option?: FormatOption): string
export function format<T extends Record<string, any>>(str: string, replacer?: T, option?: FormatOption): string
export function format<T extends Array<any> | Record<string, any>>(text: string, replacer?: T, {begin='{', end='}'}: FormatOption={}) {
  return text.replace(createFormatRegExp(begin, end), (_match: string, _begin: string, _0, _1, _2, _key: string, _end: string, _3, _4, _5, _index: number, _text: string) => {
    if (_begin.length !== _end.length) return _match
    if (_begin.length !== begin.length) return `${begin}${_key}${end}`
    // @ts-ignore
    return replacer?.[_key] === void (0) ? _match : replacer?.[_key]
  })
}
