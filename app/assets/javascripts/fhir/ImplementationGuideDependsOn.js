const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ImplementationGuideDependsOnSchema = BackboneElementSchemaFunction({
  uri: PrimitiveCanonicalSchema,
  packageId: PrimitiveIdSchema,
  version: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImplementationGuideDependsOn' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDependsOn' },
});

class ImplementationGuideDependsOn extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDependsOnSchema);
    this.typeName = 'ImplementationGuideDependsOn';
    this._type = 'FHIR::ImplementationGuideDependsOn';
  }
}

module.exports.ImplementationGuideDependsOnSchema = ImplementationGuideDependsOnSchema;
module.exports.ImplementationGuideDependsOn = ImplementationGuideDependsOn;
