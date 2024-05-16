const Country = require('../models/Country');

module.exports = {
    addCountry: async(req,res,next) => {
        const {country, description, imageurl, region, popular} = req.body;
        try {
            const NewCountry = new Country(country, description, imageurl, region);

            await NewCountry.save();

            res.status(201).json({status: true})
        } catch (error) {
            return next(error);
        }
    },
    addPlacesToCountry: async(req,res,next) => {
        
    },
    getCountries: async(req,res,next) => {
        
    },
    getCountry: async(req,res,next) => {
        
    },
}