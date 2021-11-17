const {Router} = require('express');
const router = Router();
const {Op} = require('sequelize');
const {Country, Activity} = require('../db');

router.get('/', async (req, res) => {
    const name = req.query.name

    if (name) {
        const nameCountry = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        
        include: Activity
        })
        
        return res.json(nameCountry)

    } else {
        const limitCountries = await Country.findAll()
                return res.status(200).json(limitCountries)
    }
})

router.get('/:id', async (req, res) => {
	const id = req.params.id.toUpperCase();
	let country = await Country.findByPk(id, {include: Activity});
	res.send(country);
});




module.exports = router;