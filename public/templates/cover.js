const cover_left = 58
const cover_width = 361
const cover_top = 0
const cover_height = 453

const title_y = (cover_top + cover_height + 8.6)
const title_x = 403.5
const title_align = "right"
const title_font = "MFShangYa_Noncommercial-Regular"
const title_size = 36

const desc_y = (title_y + title_size + 8.6)
const desc_x = 403.5
const desc_align = "right"
const desc_font = "FZLanTingHei-EL-GBK"
const desc_size = 13

const present_y = 569.5
const present_x = 403.5
const present_align = "right"
const present_font = "helvetica-lightOblique"
const present_size = 11

import draw from '../lib/draw'

module.exports = (ctx, option) => {
  draw.text(ctx, {
    size: title_size,
    text: option.title,
    font: title_font,
    x: title_x,
    y: title_y,
    align: title_align
  })
  draw.text(ctx, {
    size: desc_size,
    text: option.desc,
    font: desc_font,
    x: desc_x,
    y: desc_y,
    align: desc_align
  })
  draw.text(ctx, {
    size: present_size,
    text: option.presents,
    font: present_font,
    x: present_x,
    y: present_y,
    align: present_align,
  })
  draw.image(ctx, {
    left: cover_left,
    top: cover_top,
    width: cover_width,
    height: cover_height,
    url: option.cover
  })
}
