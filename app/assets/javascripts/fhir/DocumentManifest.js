const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DocumentManifestRelatedSchema } = require('./DocumentManifestRelated');
const { DocumentReferenceStatusSchema } = require('./DocumentReferenceStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentManifestSchema = DomainResourceSchemaFunction({
   masterIdentifier : IdentifierSchema,
   identifier : [IdentifierSchema],
   status : DocumentReferenceStatusSchema,
   type : CodeableConceptSchema,
   subject : ReferenceSchema,
   created : DateTime,
   author : [ReferenceSchema],
   recipient : [ReferenceSchema],
   source : String,
   description : String,
   content : [ReferenceSchema],
   related : [DocumentManifestRelatedSchema],
   fhirTitle: { type: String, default: 'DocumentManifest' },
});

class DocumentManifest extends mongoose.Document {
  constructor(object) {
    super(object, DocumentManifestSchema);
    this._type = 'FHIR::DocumentManifest';
  }
};


module.exports.DocumentManifestSchema = DocumentManifestSchema;
module.exports.DocumentManifest = DocumentManifest;
