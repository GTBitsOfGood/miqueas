import searchFunction from '../../server/searchfunction';
export default (req, res) => {
    const searchText = req.query.text;
    return searchFunction(searchText);
}