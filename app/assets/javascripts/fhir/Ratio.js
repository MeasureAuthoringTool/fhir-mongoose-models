const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { QuantitySchema } = require('./Quantity');

const RatioSchema = ElementSchemaFunction({
  numerator: QuantitySchema,
  denominator: QuantitySchema,
  typeName: { type: String, default: 'Ratio' },
  _type: { type: String, default: 'FHIR::Ratio' },
});

class Ratio extends mongoose.Document {
  constructor(object) {
    super(object, RatioSchema);
    this.typeName = 'Ratio';
    this._type = 'FHIR::Ratio';
  }
}

module.exports.RatioSchema = RatioSchema;
module.exports.Ratio = Ratio;
