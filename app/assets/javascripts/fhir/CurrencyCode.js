const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CurrencyCodeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CurrencyCode' },
});

class CurrencyCode extends mongoose.Document {
  constructor(object) {
    super(object, CurrencyCodeSchema);
    this._type = 'FHIR::CurrencyCode';
  }
};


module.exports.CurrencyCodeSchema = CurrencyCodeSchema;
module.exports.CurrencyCode = CurrencyCode;
