import { checkSchema } from "express-validator";

export default checkSchema({
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Invalid email!",
    },
    trim: true,
    escape: true,
    errorMessage: "Email is required!",
  },
  password: {
    in: ["body"],
    isString: true,
    isLength: {
      options: { min: 8 },
      errorMessage: "Password should be at least 8 character!",
    },
    trim: true,
    escape: true,
    errorMessage: "Password is required!",
  },
});
