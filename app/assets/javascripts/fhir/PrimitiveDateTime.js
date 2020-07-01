const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveDateTimeSchema = ElementSchemaFunction({
  value: Date,
  typeName: { type: String, default: 'PrimitiveDateTime' },
  _type: { type: String, default: 'FHIR::PrimitiveDateTime' },
});

class PrimitiveDateTime extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveDateTimeSchema);
    this.typeName = 'PrimitiveDateTime';
    this._type = 'FHIR::PrimitiveDateTime';
  }
}

module.exports.PrimitiveDateTimeSchema = PrimitiveDateTimeSchema;
module.exports.PrimitiveDateTime = PrimitiveDateTime;
