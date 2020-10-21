# formatify

Simple text formatter for node.js and browser

## Install

```sh
npm install formatify
```

## Usage

```ts
import {format} from 'formatify'

// format with array
format('{0} is a sample {1}', ['this', 'text']) // => "this is a sample text"

// format with object
format('{key1} is a sample {key2}', {key1: 'this', key2: 'text'}) // => "this is a sample text"

// repeat twice to escape placeholders
format('{{key1}} is a sample {key2}', {key1: 'this', key2: 'text'}) // => {key1} is a sample text

// the placeholder syntax can be configured with 3rd argument
format('%0$ is a sample %1$', ['this', 'text'], {begin: '%', end: '$'}) // => "this is a sample text"
format('%p1$ is a sample %p1$', {p1: 'this', p2: 'text'}, {begin: '%', end: '$'}) // => "this is a sample text"
```
