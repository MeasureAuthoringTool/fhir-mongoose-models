const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DocumentReferenceContentSchema } = require('./DocumentReferenceContent');
const { DocumentReferenceContextSchema } = require('./DocumentReferenceContext');
const { DocumentReferenceRelatesToSchema } = require('./DocumentReferenceRelatesTo');
const { DocumentReferenceStatusSchema } = require('./DocumentReferenceStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { ReferredDocumentStatusSchema } = require('./ReferredDocumentStatus');

const DocumentReferenceSchema = DomainResourceSchemaFunction({
  masterIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  status: DocumentReferenceStatusSchema,
  docStatus: ReferredDocumentStatusSchema,
  type: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  subject: ReferenceSchema,
  date: PrimitiveInstantSchema,
  author: [ReferenceSchema],
  authenticator: ReferenceSchema,
  custodian: ReferenceSchema,
  relatesTo: [DocumentReferenceRelatesToSchema],
  description: PrimitiveStringSchema,
  securityLabel: [CodeableConceptSchema],
  content: [DocumentReferenceContentSchema],
  context: DocumentReferenceContextSchema,
  typeName: { type: String, default: 'DocumentReference' },
  _type: { type: String, default: 'FHIR::DocumentReference' },
});

class DocumentReference extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceSchema);
    this.typeName = 'DocumentReference';
    this._type = 'FHIR::DocumentReference';
  }
}

module.exports.DocumentReferenceSchema = DocumentReferenceSchema;
module.exports.DocumentReference = DocumentReference;
