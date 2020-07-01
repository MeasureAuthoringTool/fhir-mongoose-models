const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveBase64BinarySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PrimitiveBase64Binary' },
  _type: { type: String, default: 'FHIR::PrimitiveBase64Binary' },
});

class PrimitiveBase64Binary extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveBase64BinarySchema);
    this.typeName = 'PrimitiveBase64Binary';
    this._type = 'FHIR::PrimitiveBase64Binary';
  }
}

module.exports.PrimitiveBase64BinarySchema = PrimitiveBase64BinarySchema;
module.exports.PrimitiveBase64Binary = PrimitiveBase64Binary;
