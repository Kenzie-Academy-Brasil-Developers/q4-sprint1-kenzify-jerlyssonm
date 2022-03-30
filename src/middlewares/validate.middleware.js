export const validate = (schema) => (req, res, next) => {
  schema
    .validate(req.body, {})
    .then((value) => {
      req.body = value;
      return next();
    })
    .catch((err) => {
      return res.status(400).json({ errors: err.message });
    });
};
