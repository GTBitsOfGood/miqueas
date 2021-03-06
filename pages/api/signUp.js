import { signUp } from '../../server/actions/users';

// @route   POST api/signUp
// @desc    Get Sign up a user
// @access  Public
export default async function (req, res) {
    console.log(req.body)
  const { name, email, password } = req.body;

  return signUp(name, email, password)
    .then((token) => res.status(201).json({
      success: true,
      payload: token,
    }))
    .catch((error) => res.status(400).json({
      success: false,
      message: error.toString(),
    }));
}
