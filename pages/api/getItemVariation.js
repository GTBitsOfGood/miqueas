import { getItemVariation } from '../../server/actions/itemVariation';

export default async function (req, res) {
  console.log("name: ",req.query.name);
  return getItemVariation(req.query.name)
    .then((result) => res.status(200).json({
      success: true,
      payload: result,
    }))
    .catch((error) => res.status(400).json({
      success: false,
      message: error.message,
    }));
}