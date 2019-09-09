import { getAllShops, getTopFiveShops } from '../controllers/shops';

const params = { latitude: '34.0754',
                 longitude: '-84.2941',
                 term: 'icecream',
                 city: 'Alpharetta' };

module.exports = (app) => {

    app.get('/shops', async (req, res) => {
        try {
            const allShops = await getAllShops(params);
            res.status(200).send(allShops);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.get('/shops/topfive', async (req, res) => {
        try {
            const topFiveShops = await getTopFiveShops(params);
            res.status(200).send(topFiveShops);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}