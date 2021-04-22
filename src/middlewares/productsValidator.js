import { check } from "express-validator";

export const validator = [
  check("name")
    .exists()
    .withMessage("Name is a required field")
    .isString()
    .withMessage("Name must be string")
    .isLength({ min: 5 })
    .withMessage("Length must be at least 5 chars long"),
  check("description")
    .exists()
    .withMessage("Description field is required")
    .isLength({ min: 9 })
    .withMessage("Length of description must be at leat 9 chars long"),
  check("brand").exists().withMessage("Brand is required"),
  check("price")
    .exists()
    .withMessage("Price is a required field")
    .isNumeric()
    .withMessage("Price must be a number"),
  check("category").exists().withMessage("Category field is required"),
];
