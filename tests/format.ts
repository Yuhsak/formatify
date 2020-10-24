import {format} from '../src'

describe('format', () => {

  test('no arg', () => {
    expect(format('{a} is a {b}')).toBe('{a} is a {b}')
  })

  test('array', () => {
    const txt = '{0} is a {1}'
    expect(format(txt, ['this', 'text'])).toBe('this is a text')
    expect(format(txt, ['this'])).toBe('this is a {1}')
    expect(format(txt + ' {2}', ['this', 'text', '.'])).toBe('this is a text .')
    expect(format(txt + ' {{2}}', ['this', 'text', '.'])).toBe('this is a text {2}')
  })

  test('object', () => {
    const txt = '{a} is a {b}'
    expect(format(txt, {a: 'this', b: 'text'})).toBe('this is a text')
    expect(format(txt, {a: 'this'})).toBe('this is a {b}')
    expect(format(txt + ' {c}', {a: 'this', b: 'text', c: '.'})).toBe('this is a text .')
    expect(format(txt + ' {{c}}', {a: 'this', b: 'text', c: '.'})).toBe('this is a text {c}')
    expect(format(txt + ' {{c}} {d}}', {a: 'this', b: 'text', c: '.', d: 'ignore'})).toBe('this is a text {c} {d}}')
  })

  test('syntax', () => {
    const txt = '%a$ is a %b$'
    expect(format(txt, {a: 'this', b: 'text'}, {begin: '%', end: '$'})).toBe('this is a text')
    expect(format(txt, {a: 'this'}, {begin: '%', end: '$'})).toBe('this is a %b$')
    expect(format(txt + ' %c$', {a: 'this', b: 'text', c: '.'}, {begin: '%', end: '$'})).toBe('this is a text .')
    expect(format(txt + ' %%c$$', {a: 'this', b: 'text', c: '.'}, {begin: '%', end: '$'})).toBe('this is a text %c$')
  })

})
