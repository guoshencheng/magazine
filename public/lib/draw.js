
import utils from './utils'

const scale = 2

var fit = (origin, image) => {
  var height = origin.width / image.width * image.height
  var y = height > origin.height ? origin.top - (height - origin.height) : origin.top + (origin.height - height) / utils.scale
  return {
    width: origin.width,
    height: height,
    x: origin.left,
    y: y
  }
}

var changeRect = (origin, image, scale) => {
  return fit(origin, image)
}

var drawImage = (ctx, opt) => {
  let img = new Image()
  img.onload = () => {
    var rect = changeRect(opt, img)
    ctx.drawImage(img, rect.x * utils.scale, rect.y * utils.scale, rect.width * utils.scale, rect.height * utils.scale)
  }
  img.src = opt.url
}

var checkTextOpt = (opt) => {
  opt.style = opt.style || ''
  opt.size = opt.size || "16px";
  opt.text = opt.text || ""
  opt.font = opt.font || 'PingFangSC-Ultralight, sans-serif'
  opt.x = opt.x || 0
  opt.y = opt.y || 0
  opt.align = opt.align || 'left'
  opt.width = opt.width || 0
  opt.mode = opt.mode || 'top'
  opt.linespace = opt.linespace || 17
}

var drawCustomText = (ctx, opt) => {
  if (opt.align == 'left') {
    for (var i = 0; i < opt.text.length; i++) {
      var word = opt.text[i]
      var x = opt.x + i * opt.wordspace
      var option = Object.assign({}, opt, {x: x, wordspace: null, text: word})
      drawText(ctx, option)
    }
  } else {
    for (var i = 0; i < opt.text.length; i++) {
      var word = opt.text[i]
      var x = opt.x - i * opt.wordspace
      var option = Object.assign({}, opt, {x: x, wordspace: null, text: word})
      drawText(ctx, option)
    }
  }
}

var drawText = (ctx, opt) => {
  checkTextOpt(opt)
  ctx.font = opt.style + ' ' + opt.size * utils.scale + "px " + opt.font
  ctx.textAlign = opt.align
  ctx.textBaseline = 'top'
  ctx.fillStyle = "#656464"
  ctx.fillText(opt.text, opt.x * utils.scale, opt.y * utils.scale)
}


var drawTexts = (ctx, opt) => {
  checkTextOpt(opt)
  ctx.font = opt.style + ' ' + opt.size * utils.scale + "px " + opt.font
  var {words, height} = utils.separateWord(ctx, opt.text, opt.width * utils.scale, {wordspace: utils.scale * opt.wordspace,
    size: utils.scale * opt.size,
    linespace: utils.scale * opt.linespace})
  var origin = {x: opt.x, y: opt.y}
  if (opt.mode == 'center') {
    origin = {
      x: opt.x,
      y: opt.y - height / 2
    }
  }
  words.forEach((word, index) => {
    var option = Object.assign({}, opt, word, {wordspace: null}, {x: origin.x + word.x, y: origin.y + word.y})
    drawText(ctx, option)
  })
}

module.exports = {
  image: drawImage,
  text: drawText,
  texts: drawTexts
}
