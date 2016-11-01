import draw from '../lib/draw'

const title_text = '序言'
const title_y = 66
const title_x = 210
const title_align = "center"
const title_font = "Kozuka Mincho Pr6N"
const title_size = 27

const content_y = title_y + 41 + title_size
const content_wordspace = 10
const content_x = 65.5
const content_align = "left"
const content_font = "FZLanTingHei-EL-GBK"
const content_size = 8
const content_linespace = 13
const content_width = 288

module.exports = (ctx, option) => {
  draw.text(ctx, {
    size: title_size,
    text: title_text,
    font: title_font,
    x: title_x,
    y: title_y,
    align: title_align
  })
  draw.texts(ctx, {
    width: content_width,
    text: option.content,
    size: content_size,
    font: content_font,
    x: content_x,
    y: content_y,
    align: content_align,
    linespace: content_linespace,
    wordspace: content_wordspace
  })
}
