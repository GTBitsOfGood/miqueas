const Item = require("../models/ItemModel");

module.exports = {
    /**
     *  Generic search function for the item search feature
     *  required parameter: key, value (for example: name == "james")
     */
    genericSearch: (req, res) => {
        const key = String(req.query.key);
        const value = String(req.query.value);
        obj = {}
        obj[key] = value
        console.log(obj)
        Item.find(obj)
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                })
                .catch(err => {
                    console.log(err)
                    res.send(err);
                });
    },
    /**
     *  search by name
     */
    searchByName: (res, res) => {
        const value = String(req.qeury.nameVal);
        obj = {}
        obj["name"] = value;
        Item.find(obj)
                .then(docs => {
                    console.log(docs);
                    res.send(docs);
                })
                .catch(err => {
                    console.log(err)
                    res.send(err);
                });
    }
    /**
     *  More search utility to be added
     */
}