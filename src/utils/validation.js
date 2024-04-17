import {
  cardCVCRegex,
  cardExpirationRegex,
  cardNumberRegex,
  cardOwnerNameRegex,
  emailRegex,
  nameRegex,
  passwordRegex,
} from "./regex";

export const requiredValidation = {
  required: "Required Field",
};

export const emailValidation = {
  required: "Required Email Field",
  pattern: {
    value: emailRegex,
    message: "Invalid Email",
  },
};

export const passwordValidation = {
  required: "Required Password Field",
  pattern: {
    value: passwordRegex,
    message: "Invalid Password",
  },
};

export const addreasValidation = {
  required: "Required Addreas Field",
  minLength: {
    value: 5,
    message: "Specify the shipping address",
  },
};

export const nameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your name",
  },
};

export const lastNameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your lastname",
  },
};

export const cardNumberValidation = {
  required: "Required Field",
  pattern: {
    value: cardNumberRegex,
    message: "Write your card number",
  },
};

export const cardExpirationValidation = {
  required: "Required Field",
  pattern: {
    value: cardExpirationRegex,
    message: "Write your card expiration",
  },
};

export const cardCVCValidation = {
  required: "Required Field",
  pattern: {
    value: cardCVCRegex,
    message: "Write your card CVC",
  },
};

export const cardNameValidation = {
  required: "Required Field",
  pattern: {
    value: cardOwnerNameRegex,
    message: "Write your name of owner",
  },
};

export const messageValidation = {
  required: "Required Message Field",
  minLength: {
    value: 1,
    message: "Invalid Message",
  },
};
