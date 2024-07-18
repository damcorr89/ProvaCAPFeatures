const { getProva, insertMassiveBooks } = require('./api')


class BooksService extends cds.ApplicationService {
    init() {
        const { Foo, Prova } = this.entities
        this.on('getQualcosa', Foo, (req) => {
            console.log('ciaooooooooooooooooooooooooneeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            return  2
        })
        this.on('lolla', (req) => {
            console.log('ciaooooooooooooooooooooooooneeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            return  "ddkjdkdk"
        })
        this.on('READ', Prova, getProva)
        this.on('insertMassiveBooks', insertMassiveBooks)
        
        return super.init()
    }
  }
  module.exports = BooksService