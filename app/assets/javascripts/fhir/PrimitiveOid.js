const mongoose = require('mongoose/browser');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUriSchemaFunction } = require('./PrimitiveUri');

const PrimitiveOidSchema = PrimitiveUriSchemaFunction({
  typeName: { type: String, default: 'PrimitiveOid' },
  _type: { type: String, default: 'FHIR::PrimitiveOid' },
});

class PrimitiveOid extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveOidSchema);
    this.typeName = 'PrimitiveOid';
    this._type = 'FHIR::PrimitiveOid';
  }
}

module.exports.PrimitiveOidSchema = PrimitiveOidSchema;
module.exports.PrimitiveOid = PrimitiveOid;
