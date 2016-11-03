
import utils from '../../../lib/utils'
const image_height = 312
const image_top = 56
module.exports = {
  image: {
    left: 34,
    top: image_top,
    width: utils.pageWidth - 34 * 2,
    height: image_height,
    scale: 'fill'
  },
  texts: {
    x: 95,
    y: image_height + image_top + 71,
    width: 230,
    size: 8,
    font: 'FZLanTingHei-EL-GBK',
    align: 'left',
    linespace: 13,
    wordspace: 10
  }
}
