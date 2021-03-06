const scale = 3
const pageHeight = 595
const pageWidth = 419

var getLines = (ctx, text, maxWidth, opt) => {
  if (opt.wordspace) {
    return caculateLines(text, maxWidth, opt)
  } else {
    return measureLines(ctx, text, maxWidth)
  }
}

var separateWord = (ctx, text, maxWidth, opt) => {
  var array = []
  let x = !opt.cancalstart ? opt.wordspace * 2 : 0
  let y = 0
  for (var i = 0;i < text.length; i++) {
    var word = text[i]
    if (checkReturn(word)) {
      y += opt.linespace
      x = !opt.cancalstart ? opt.wordspace * 2 : 0
    } else {
      if (!checkPunctuation(word)) {
        array.push({x: x / scale, y: y / scale, text: word})
        x += opt.wordspace
      } else {
        while(i + 1 < text.length && checkPunctuation(text[i + 1])) {
          word += text[i + 1]
          i ++
        }
        array.push({x: x / scale, y: y / scale, text: word})
        var width = ctx.measureText(word).width + (opt.wordspace - opt.size)
        x += width
      }
    }
    if (x > maxWidth) {
      x = 0
      y += opt.linespace
    }
  }
  var height
  if (x = 0) {
    height = y
  } else {
    height = y + opt.linespace
  }
  height = height / scale
  return {
    words: array,
    height
  }
}

var measureLines = (ctx, text, maxWidth) => {
  var currentLine = "  " + text[0]
  var lines = []
  for (var i = 1; i < text.length; i ++) {
    var word = text[i]
    var width = ctx.measureText(currentLine + word).width
    if (width < maxWidth) {
      currentLine += word
    } else {
      lines.push(currentLine)
      currentLine = word + ""
    }
  }
  lines.push(currentLine)
  return lines
}

var checkPunctuation = (str) => {
  var punctuation = /[,.?。\-]/
  var english = /^[A-Za-z0-9]*$/
  return punctuation.test(str) || !isNaN(str) || english.test(str)
}

var checkReturn = (str) => {
  var ret = /\r|\n/
  return ret.test(str)
}

var caculateLines = (text, maxWidth, opt) => {
  var currentLine = "" + text[0]
  var lines = []
  var currentWidth = 0
  for (var i = 0; i < text.length; i ++) {
    var word = text[i]
    !checkPunctuation(word) ? currentWidth += opt.wordspace : currentWidth += ((opt.wordspace - opt.size) / scale + opt.size)
    var width = (currentLine + word).length * opt.wordspace
    if (currentWidth <= maxWidth + (opt.wordspace - opt.size)) {
      currentLine += word
    } else {
      lines.push(currentLine)
      currentWidth
      currentLine = word + ""
      checkPunctuation(word) ? currentWidth = opt.wordspace : currentWidth = ((opt.wordspace - opt.size) / scale + opt.size)
    }
  }
  lines.push(currentLine)
  return lines
}

module.exports = {
  getLines,
  checkPunctuation,
  separateWord,
  scale,
  pageWidth,
  pageHeight
}
