const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { ReferenceSchema } = require('./Reference');

const ImplementationGuideManifestResourceSchema = BackboneElementSchemaFunction({
  reference: ReferenceSchema,
  exampleBoolean: PrimitiveBooleanSchema,
  exampleCanonical: PrimitiveCanonicalSchema,
  relativePath: PrimitiveUrlSchema,
  typeName: { type: String, default: 'ImplementationGuideManifestResource' },
  _type: { type: String, default: 'FHIR::ImplementationGuideManifestResource' },
});

class ImplementationGuideManifestResource extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestResourceSchema);
    this.typeName = 'ImplementationGuideManifestResource';
    this._type = 'FHIR::ImplementationGuideManifestResource';
  }
}

module.exports.ImplementationGuideManifestResourceSchema = ImplementationGuideManifestResourceSchema;
module.exports.ImplementationGuideManifestResource = ImplementationGuideManifestResource;
