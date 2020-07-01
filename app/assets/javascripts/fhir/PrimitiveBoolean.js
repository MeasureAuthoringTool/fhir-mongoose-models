const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveBooleanSchema = ElementSchemaFunction({
  value: Boolean,
  typeName: { type: String, default: 'PrimitiveBoolean' },
  _type: { type: String, default: 'FHIR::PrimitiveBoolean' },
});

class PrimitiveBoolean extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveBooleanSchema);
    this.typeName = 'PrimitiveBoolean';
    this._type = 'FHIR::PrimitiveBoolean';
  }
}

module.exports.PrimitiveBooleanSchema = PrimitiveBooleanSchema;
module.exports.PrimitiveBoolean = PrimitiveBoolean;
