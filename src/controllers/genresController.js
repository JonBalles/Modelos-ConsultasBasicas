const db = require ("../models")

module.exports = {

    list: (req, res) => {
        db.Genres.findAll()
        .then((genres) => {
         return res.render("genresList", {genres})
        })
    },
    detail: (req, res) => {
        let genreId = req.params.id

        db.Genres.findByPk(genreId)
        .then((genre) => {
         return res.render("genresDetail", {genre})
        })
    }

}