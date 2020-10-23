import validator from "validator"
const rules = {
  isEmail: (msg = "Invalid Email Address") => (input) => validator.isEmail(input) || msg,
  isMongoId: (msg = "Not a valid ObjectID") => (input) => validator.isMongoId(input) || msg,
  isAlpha: (msg = "Alphabetic value is required") => (input) => validator.isAlpha(input) || msg,
  isNumeric: (msg = "Numeric Value is required") => (input) => validator.isNumeric(input) || msg,
  isDecimal: (msg = "Decimal Value is required") => (input) => validator.isDecimal(input) || msg,
  isHexadecimal: (msg = "Decimal Value is required") => (input) => validator.isHexadecimal(input) || msg,
  isBase64: (msg = "BASE64 Value is required") => (input) => validator.isBase64(input) || msg,
  isIBAN: (msg = "Invalid IBAN Provided") => (input) => validator.isIBAN(input) || msg,
  isCreditCard: (msg = "Invalid CreditCard provided") => (input) => validator.isCreditCard(input) || msg,
  isCurrency: (msg = "Invalid Currency Provided") => (input) => validator.isCurrency(input) || msg,
  isLatLong: (msg = "Not a valid Lat,Long Coordinates") => (input) => validator.isLatLong(input) || msg,
  isIP: (version = 4, msg = "Valid IP Address is required") => (input) => validator.isIP(input, version) || msg,
  isJWT: (msg = "Valid JWT Token is required") => (input) => validator.isJWT(input) || msg,
  isMACAddress: (msg = "Valid MAC Address is required") => (input) => validator.isMACAddress(input) || msg,
  isMimeType: (msg = "Valid MIME Type is required") => (input) => validator.isMimeType(input) || msg,
  isURL: (msg = "Valid URL is required") => (input) => validator.isURL(input) || msg,
  isDate: (msg = "Not a valid date string") => (input) => validator.isDate(input) || msg
}

export default {
  install (Vue) {
    Vue.prototype.$rules = rules
  }
}
