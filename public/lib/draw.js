
var fit = (origin, image) => {
  var height = origin.width / image.width * image.height
  var y = height > origin.height ? origin.top - (height - origin.height) : origin.top + (origin.height - height) / 2
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
    ctx.drawImage(img, rect.x * 2, rect.y * 2, rect.width * 2, rect.height * 2)
  }
  img.src = opt.url
}

var drawText = (ctx, opt) => {
  opt.style = opt.style || ''
  opt.size = opt.size || "16px";
  opt.text = opt.text || ""
  opt.font = opt.font || 'PingFangSC-Ultralight, sans-serif'
  opt.x = opt.x || 0
  opt.y = opt.y || 0
  opt.align = opt.align || 'left'
  ctx.font = opt.style + ' ' + opt.size * 2 + "px " + opt.font
  ctx.textAlign = opt.align
  ctx.textBaseline = 'top'
  ctx.fillStyle = "#656464"
  ctx.fillText(opt.text, opt.x * 2, opt.y * 2)
}

module.exports = {
  image: drawImage,
  text: drawText
}
