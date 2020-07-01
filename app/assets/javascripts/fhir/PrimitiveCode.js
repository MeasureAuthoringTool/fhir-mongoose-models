const mongoose = require('mongoose/browser');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveStringSchemaFunction } = require('./PrimitiveString');

const PrimitiveCodeSchema = PrimitiveStringSchemaFunction({
  typeName: { type: String, default: 'PrimitiveCode' },
  _type: { type: String, default: 'FHIR::PrimitiveCode' },
});

class PrimitiveCode extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveCodeSchema);
    this.typeName = 'PrimitiveCode';
    this._type = 'FHIR::PrimitiveCode';
  }
}

module.exports.PrimitiveCodeSchema = PrimitiveCodeSchema;
module.exports.PrimitiveCode = PrimitiveCode;
