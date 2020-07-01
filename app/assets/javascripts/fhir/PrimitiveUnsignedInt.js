const mongoose = require('mongoose/browser');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveIntegerSchemaFunction } = require('./PrimitiveInteger');

const PrimitiveUnsignedIntSchema = PrimitiveIntegerSchemaFunction({
  typeName: { type: String, default: 'PrimitiveUnsignedInt' },
  _type: { type: String, default: 'FHIR::PrimitiveUnsignedInt' },
});

class PrimitiveUnsignedInt extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveUnsignedIntSchema);
    this.typeName = 'PrimitiveUnsignedInt';
    this._type = 'FHIR::PrimitiveUnsignedInt';
  }
}

module.exports.PrimitiveUnsignedIntSchema = PrimitiveUnsignedIntSchema;
module.exports.PrimitiveUnsignedInt = PrimitiveUnsignedInt;
