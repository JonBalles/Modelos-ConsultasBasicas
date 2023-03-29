const db = require ("../models")

module.exports = {

    list: (req, res) => {
        db.Movies.findAll()
        .then((movies) => {
         return res.render("moviesList", {movies})
        })
    },
    detail: (req, res) => {
        let movieId = req.params.id

        db.Movies.findByPk(movieId)
        .then((movie) => {
         return res.render("moviesDetail", {movie})
        })
    },
    new:(req, res) => {
        db.Movies.findAll({
            order:[
                ["release_date","DESC"]
            ]
        })
        .then((movies) => {
         return res.render("moviesList", {movies})
        })
    },
    recomended:(req, res) => {
        db.Movies.findAll({
            order:[
                ["rating","DESC"]    
            ],
            limit : 5
        })
        .then((movies) => {
         return res.render("moviesList", {movies})
        })
    }

}