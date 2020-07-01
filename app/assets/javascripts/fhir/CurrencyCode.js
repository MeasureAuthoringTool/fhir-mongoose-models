const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CurrencyCodeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CurrencyCode' },
  _type: { type: String, default: 'FHIR::CurrencyCode' },
});

class CurrencyCode extends mongoose.Document {
  constructor(object) {
    super(object, CurrencyCodeSchema);
    this.typeName = 'CurrencyCode';
    this._type = 'FHIR::CurrencyCode';
  }
}

module.exports.CurrencyCodeSchema = CurrencyCodeSchema;
module.exports.CurrencyCode = CurrencyCode;
