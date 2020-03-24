import { updateItemState } from '../../server/actions/items';

// @route   POST api/updateStock
// @desc    Update item stock
// @access  Public
export default async function (req, res) {
    console.log("body:",req.body);
    const { updatedItem } = req.body;
    console.log("item",updatedItem);
    return updateItemState(updatedItem._id, updatedItem.stock)
        .then((result) => res.status(201).json({
            success: true,
            payload: result,
        }))
        .catch((error) => res.status(400).json({
            success: false,
            message: error.message,
        }));
}
