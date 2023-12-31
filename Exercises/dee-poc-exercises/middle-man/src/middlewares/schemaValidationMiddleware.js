import userSchema from "../schemas/userSchema.js";

function validateUser(req, res, next) {
    const user = req.body;

    const validation = userSchema.validate(user);
    if (validation.error) {
        return res.sendStatus(422);
    }

    next();
}

export { validateUser };
