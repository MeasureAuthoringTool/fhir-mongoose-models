const mongoose = require('mongoose/browser');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveStringSchemaFunction } = require('./PrimitiveString');

const PrimitiveIdSchema = PrimitiveStringSchemaFunction({
  typeName: { type: String, default: 'PrimitiveId' },
  _type: { type: String, default: 'FHIR::PrimitiveId' },
});

class PrimitiveId extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveIdSchema);
    this.typeName = 'PrimitiveId';
    this._type = 'FHIR::PrimitiveId';
  }
}

module.exports.PrimitiveIdSchema = PrimitiveIdSchema;
module.exports.PrimitiveId = PrimitiveId;
