const {Router} = require('express');
const router = Router();
const {Activity, Country} = require('../db');

router.post("/", async (req, res) => {
    const { name, dificultad, duration, temporada, countries} = req.body;
    const activity=  await Activity.create({
        name,
        dificultad,
        duration,
        temporada,
        countries
    })

    .then((act) => {
        countries.map((cat) => {
            Country.findAll({ where: { id: cat} })
                .then((pais) => {
                    act.addCountry(pais[0]);
                })

        })
        return act
    })
    .then(resp => {
        res.status(200).send(resp)
    })
    .catch(err => console.log(err));

    
})




module.exports = router;