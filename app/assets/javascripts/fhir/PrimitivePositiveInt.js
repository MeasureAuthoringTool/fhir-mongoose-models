const mongoose = require('mongoose/browser');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveIntegerSchemaFunction } = require('./PrimitiveInteger');

const PrimitivePositiveIntSchema = PrimitiveIntegerSchemaFunction({
  typeName: { type: String, default: 'PrimitivePositiveInt' },
  _type: { type: String, default: 'FHIR::PrimitivePositiveInt' },
});

class PrimitivePositiveInt extends mongoose.Document {
  constructor(object) {
    super(object, PrimitivePositiveIntSchema);
    this.typeName = 'PrimitivePositiveInt';
    this._type = 'FHIR::PrimitivePositiveInt';
  }
}

module.exports.PrimitivePositiveIntSchema = PrimitivePositiveIntSchema;
module.exports.PrimitivePositiveInt = PrimitivePositiveInt;
