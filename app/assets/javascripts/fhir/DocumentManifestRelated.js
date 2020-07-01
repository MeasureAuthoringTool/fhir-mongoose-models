const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const DocumentManifestRelatedSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  ref: ReferenceSchema,
  typeName: { type: String, default: 'DocumentManifestRelated' },
  _type: { type: String, default: 'FHIR::DocumentManifestRelated' },
});

class DocumentManifestRelated extends mongoose.Document {
  constructor(object) {
    super(object, DocumentManifestRelatedSchema);
    this.typeName = 'DocumentManifestRelated';
    this._type = 'FHIR::DocumentManifestRelated';
  }
}

module.exports.DocumentManifestRelatedSchema = DocumentManifestRelatedSchema;
module.exports.DocumentManifestRelated = DocumentManifestRelated;
