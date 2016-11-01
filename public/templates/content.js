
import draw from '../lib/draw'

module.exports = (models) => {
  return (context, value) => {
    Object.keys.forEach(key => {
      if (key == 'image') {
        var model = models[key]
        draw.image({
          url: value.cover
          left: model.left,
          top: model.top,
          width: model.width,
          height: model.height,
        })
      } else if (key == 'text') {
        var model = models[key]
        draw.text({
          size: model.size,
          text: value.text,
          font: model.font,
          x: model.x,
          y: model.y,
          align: model.align,
        })
      } else if (key == 'texts') {
        var model = models[key]
        draw.texts({
          x: model.x,
          y: model.y,
          width: model.width,
          text: value.texts,
          size: model.size,
          font: model.font,
          align: model.align,
          linespace: model.linespace,
          wordspace: model.wordspace
        })
      }
    })
  }
}
