const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DocumentReferenceContentSchema } = require('./DocumentReferenceContent');
const { DocumentReferenceContextSchema } = require('./DocumentReferenceContext');
const { DocumentReferenceRelatesToSchema } = require('./DocumentReferenceRelatesTo');
const { DocumentReferenceStatusSchema } = require('./DocumentReferenceStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { ReferredDocumentStatusSchema } = require('./ReferredDocumentStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentReferenceSchema = DomainResourceSchemaFunction({
   masterIdentifier : IdentifierSchema,
   identifier : [IdentifierSchema],
   status : DocumentReferenceStatusSchema,
   docStatus : ReferredDocumentStatusSchema,
   type : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   subject : ReferenceSchema,
   date : DateTime,
   author : [ReferenceSchema],
   authenticator : ReferenceSchema,
   custodian : ReferenceSchema,
   relatesTo : [DocumentReferenceRelatesToSchema],
   description : String,
   securityLabel : [CodeableConceptSchema],
   content : [DocumentReferenceContentSchema],
   context : DocumentReferenceContextSchema,
   fhirTitle: { type: String, default: 'DocumentReference' },
});

class DocumentReference extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceSchema);
    this._type = 'FHIR::DocumentReference';
  }
};


module.exports.DocumentReferenceSchema = DocumentReferenceSchema;
module.exports.DocumentReference = DocumentReference;
