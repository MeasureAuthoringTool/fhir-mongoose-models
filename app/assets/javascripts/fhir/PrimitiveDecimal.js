const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveDecimalSchema = ElementSchemaFunction({
  value: Number,
  typeName: { type: String, default: 'PrimitiveDecimal' },
  _type: { type: String, default: 'FHIR::PrimitiveDecimal' },
});

class PrimitiveDecimal extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveDecimalSchema);
    this.typeName = 'PrimitiveDecimal';
    this._type = 'FHIR::PrimitiveDecimal';
  }
}

module.exports.PrimitiveDecimalSchema = PrimitiveDecimalSchema;
module.exports.PrimitiveDecimal = PrimitiveDecimal;
