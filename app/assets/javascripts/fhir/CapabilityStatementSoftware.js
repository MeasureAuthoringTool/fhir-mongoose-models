const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CapabilityStatementSoftwareSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  releaseDate: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'CapabilityStatementSoftware' },
  _type: { type: String, default: 'FHIR::CapabilityStatementSoftware' },
});

class CapabilityStatementSoftware extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementSoftwareSchema);
    this.typeName = 'CapabilityStatementSoftware';
    this._type = 'FHIR::CapabilityStatementSoftware';
  }
}

module.exports.CapabilityStatementSoftwareSchema = CapabilityStatementSoftwareSchema;
module.exports.CapabilityStatementSoftware = CapabilityStatementSoftware;
