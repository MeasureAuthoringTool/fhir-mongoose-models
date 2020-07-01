const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ImplementationGuideManifestPageSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  anchor: [PrimitiveStringSchema],
  typeName: { type: String, default: 'ImplementationGuideManifestPage' },
  _type: { type: String, default: 'FHIR::ImplementationGuideManifestPage' },
});

class ImplementationGuideManifestPage extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideManifestPageSchema);
    this.typeName = 'ImplementationGuideManifestPage';
    this._type = 'FHIR::ImplementationGuideManifestPage';
  }
}

module.exports.ImplementationGuideManifestPageSchema = ImplementationGuideManifestPageSchema;
module.exports.ImplementationGuideManifestPage = ImplementationGuideManifestPage;
