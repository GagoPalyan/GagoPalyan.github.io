export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const passwordRegex = /^(?=.*[\d])(?=.*[!._-])[\w.-_]{8,16}$/;

export const nameRegex = /^[A-Z][a-z]+$/;

export const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

export const cardExpirationRegex = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;

export const cardCVCRegex = /^[1-9]{3,3}$/;

export const cardOwnerNameRegex = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/;
