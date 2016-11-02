
import models from './models'

module.exports = [
  {
    count: 1,
    left: models.text.text1,
    right: models.image.image1
  },
  {
    count: 1,
    right: models.text.text1,
    left: models.image.image1
  },
  {
    count: 2,
    right: models.mix.mix1,
    left: models.mix.mix1
  },
  {
    count: 2,
    right: models.mix.mix1,
    left: models.mix.mix1
  },
  {
    count: 2,
    right: models.mix.mix1,
    left: models.mix.mix1
  },
  {
    count: 2,
    left: models.mix.mix2,
    right: models.mix.mix3
  },
  {
    count: 2,
    right: models.mix.mix2,
    left: models.mix.mix3
  },
  {
    count: 2,
    left: models.mix.mix2,
    right: models.mix.mix3
  },
]
