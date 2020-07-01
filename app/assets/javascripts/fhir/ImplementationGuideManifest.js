const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ImplementationGuideManifestPageSchema } = require('./ImplementationGuideManifestPage');
const { ImplementationGuideManifestResourceSchema } = require('./ImplementationGuideManifestResource');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');

const ImplementationGuideManifestSchema = BackboneElementSchemaFunction({
  rendering: PrimitiveUrlSchema,
  resource: [ImplementationGuideManifestResourceSchema],
  page: [ImplementationGuideManifestPageSchema],
  image: [PrimitiveStringSchema],
  other: [PrimitiveStringSchema],
  typeName: { type: String, default: 'ImplementationGuideManifest' },
  _type: { type: String, default: 'FHIR::ImplementationGuideManifest' },
});

class ImplementationGuideManifest extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestSchema);
    this.typeName = 'ImplementationGuideManifest';
    this._type = 'FHIR::ImplementationGuideManifest';
  }
}

module.exports.ImplementationGuideManifestSchema = ImplementationGuideManifestSchema;
module.exports.ImplementationGuideManifest = ImplementationGuideManifest;
