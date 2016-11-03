

import draw from '../lib/draw'

const number_left = {
  x: 14.7,
  y: 561.5,
  size: 8,
  font: 'FZLanTingHei-EL-GBK',
}

const text_left = {
  width: 10,
  size: 8,
  font: 'FZLanTingHei-EL-GBK',
  x: 15.7,
  y: 549.5,
  mode: 'bottom',
  align: 'left',
  linespace: 9,
  wordspace: 10,
  cancalstart: true
}

const number_right = {
  x: 404.3,
  y: 561.5,
  size: 8,
  font: 'FZLanTingHei-EL-GBK',
  align: 'right'
}

const text_right = {
  width: 10,
  size: 8,
  font: 'FZLanTingHei-EL-GBK',
  x: 403.3,
  y: 549.5,
  mode: 'bottom',
  align: 'right',
  linespace: 9,
  wordspace: 10,
  cancalstart: true
}

module.exports = (ctx, option) => {
  var number_attr = Object.assign({}, {text: option.number}, option.side == 0 ? number_left : number_right)
  draw.text(ctx, number_attr)
  var text = ""
  for (var index = 0; index < option.name.length; index ++) {
    var current = index == option.name.length - 1 ? option.name[index] : (option.name[index] + '\n')
    text += current
  }
  var text_attr = Object.assign(({}, option.side == 0 ? text_left : text_right), {text: text})
  draw.texts(ctx, text_attr)
}
