const express = require('express');
const router = express.Router();

/* GET brands listing. */
router.get('/', function (req, res, next) {
    let currentBrands = brands;
    if(req?.filter){
        console.log(req)
    }
    res.json(currentBrands);
});

module.exports = router;

const brands = [
    {
        id: 1,
        name: 'bbc',
        logo: 'bbc-black.svg'
    },
    {
        id: 2,
        name: 'distell',
        logo: 'distell-black.svg'
    },
    {
        id: 3,
        name: 'engine',
        logo: 'engen-black.svg'
    },
    {
        id: 4,
        name: 'liquid',
        logo: 'liquid-black.svg'
    },
    {
        id: 5,
        name: 'microsoft',
        logo: 'microsoft-black.svg'
    },
    {
        id: 6,
        name: 'nike',
        logo: 'nike-black.svg'
    },
    {
        id: 7,
        name: 'pnp',
        logo: 'pnp-black.svg'
    },
    {
        id: 8,
        name: 'sanlam',
        logo: 'sanlam-black.svg'
    },
    {
        id: 9,
        name: 'santam',
        logo: 'santam-black.svg'
    },
    {
        id: 10,
        name: 'spotify',
        logo: 'spotify-black.svg'
    },
    {
        id: 11,
        name: 'tfg',
        logo: 'tfg-black.svg'
    },
    {
        id: 12,
        name: 'tyme',
        logo: 'tyme-bank-black.svg'
    },
    {
        id: 13,
        name: 'visa',
        logo: 'visa-black.svg'
    },
    {
        id: 14,
        name: 'wesgrow',
        logo: 'wesgrow-black.svg'
    },
    {
        id: 15,
        name: 'multichoice',
        logo: 'multichoice-black.svg'
    }
];