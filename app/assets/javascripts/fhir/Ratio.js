const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./Quantity');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RatioSchema = ElementSchemaFunction({
   numerator : QuantitySchema,
   denominator : QuantitySchema,
   fhirTitle: { type: String, default: 'Ratio' },
});

class Ratio extends mongoose.Document {
  constructor(object) {
    super(object, RatioSchema);
    this._type = 'FHIR::Ratio';
  }
};


module.exports.RatioSchema = RatioSchema;
module.exports.Ratio = Ratio;
