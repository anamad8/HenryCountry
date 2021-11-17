//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const {Country} = require('./src/db');

//Syncing all the models at once.
conn.sync({ force: true }).then( async () => {
 const countries = await axios.get('https://restcountries.com/v3/all'); 
    // console.log(countries);
    //console.log(countries.data[0].subregion)

  server.listen(3001, async () => {
    
    countries.data.map(async (c) => {
			
      try {
				await Country.create({
          id: c.cca3,
					name: c.name.common,
					imgBandera: c.flags[1],
					continente: c.region,
					capital: c.capital ? c.capital[0] : "capital not found",
					subRegion: c.subregion,
          area: c.area,
          poblacion: c.population,
        });
        
			} catch (error) {
				console.log(error);
			}
		});
    // console.log('%s listening at 3001'); // eslint-disable-line no-console
    
  });
});

// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
