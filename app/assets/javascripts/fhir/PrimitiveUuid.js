const mongoose = require('mongoose/browser');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUriSchemaFunction } = require('./PrimitiveUri');

const PrimitiveUuidSchema = PrimitiveUriSchemaFunction({
  typeName: { type: String, default: 'PrimitiveUuid' },
  _type: { type: String, default: 'FHIR::PrimitiveUuid' },
});

class PrimitiveUuid extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveUuidSchema);
    this.typeName = 'PrimitiveUuid';
    this._type = 'FHIR::PrimitiveUuid';
  }
}

module.exports.PrimitiveUuidSchema = PrimitiveUuidSchema;
module.exports.PrimitiveUuid = PrimitiveUuid;
