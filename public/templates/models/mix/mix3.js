
import utils from '../../../lib/utils'
const image_height = 319
const image_top = 194
const image_width = 351
module.exports = {
  image: {
    left: (utils.pageWidth - image_width) / 2,
    top: image_top,
    width: image_width,
    height: image_height,
    scale: 'fill'
  },
  texts: {
    x: 138,
    y: image_top - 38,
    width: 248,
    size: 8,
    font: 'FZLanTingHei-EL-GBK',
    align: 'left',
    linespace: 13,
    wordspace: 10,
    mode: 'bottom'
  }
}
