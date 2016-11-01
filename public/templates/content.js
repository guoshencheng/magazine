
import draw from '../lib/draw'

module.exports = (models) => {
  return (context, value) => {
    Object.keys(models).forEach(key => {
      if (key == 'image') {
        var model = models[key]
        draw.image(context, {
          url: value.image,
          left: model.left,
          top: model.top,
          width: model.width,
          height: model.height,
        })
      } else if (key == 'text') {
        var model = models[key]
        draw.text(context, {
          size: model.size,
          text: value.text,
          font: model.font,
          x: model.x,
          y: model.y,
          align: model.align,
        })
      } else if (key == 'texts') {
        var model = models[key]
        draw.texts(context, {
          x: model.x,
          y: model.y,
          width: model.width,
          text: value.texts,
          size: model.size,
          font: model.font,
          align: model.align,
          mode: model.mode,
          linespace: model.linespace,
          wordspace: model.wordspace
        })
      }
    })
  }
}
