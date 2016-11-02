
import utils from '../../../lib/utils'
const image_height = 319
const image_top = 81
module.exports = {
  image: {
    left: 34,
    top: image_top,
    width: utils.pageWidth - 34 * 2,
    height: image_height
  },
  texts: {
    x: 34,
    y: image_height + image_top + 38,
    width: 248,
    size: 8,
    font: 'FZLanTingHei-EL-GBK',
    align: 'left',
    linespace: 13,
    wordspace: 10
  }
}
