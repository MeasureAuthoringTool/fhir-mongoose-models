const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DocumentManifestRelatedSchema } = require('./DocumentManifestRelated');
const { DocumentReferenceStatusSchema } = require('./DocumentReferenceStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const DocumentManifestSchema = DomainResourceSchemaFunction({
  masterIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  status: DocumentReferenceStatusSchema,
  type: CodeableConceptSchema,
  subject: ReferenceSchema,
  created: PrimitiveDateTimeSchema,
  author: [ReferenceSchema],
  recipient: [ReferenceSchema],
  source: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
  content: [ReferenceSchema],
  related: [DocumentManifestRelatedSchema],
  typeName: { type: String, default: 'DocumentManifest' },
  _type: { type: String, default: 'FHIR::DocumentManifest' },
});

class DocumentManifest extends mongoose.Document {
  constructor(object) {
    super(object, DocumentManifestSchema);
    this.typeName = 'DocumentManifest';
    this._type = 'FHIR::DocumentManifest';
  }
}

module.exports.DocumentManifestSchema = DocumentManifestSchema;
module.exports.DocumentManifest = DocumentManifest;
