const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CompositionAttesterSchema } = require('./CompositionAttester');
const { CompositionEventSchema } = require('./CompositionEvent');
const { CompositionRelatesToSchema } = require('./CompositionRelatesTo');
const { CompositionSectionSchema } = require('./CompositionSection');
const { CompositionStatusSchema } = require('./CompositionStatus');
const { DocumentConfidentialitySchema } = require('./DocumentConfidentiality');
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

const CompositionSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   status : CompositionStatusSchema,
   type : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   date : DateTime,
   author : [ReferenceSchema],
   title : String,
   confidentiality : DocumentConfidentialitySchema,
   attester : [CompositionAttesterSchema],
   custodian : ReferenceSchema,
   relatesTo : [CompositionRelatesToSchema],
   event : [CompositionEventSchema],
   section : [CompositionSectionSchema],
   fhirTitle: { type: String, default: 'Composition' },
});

class Composition extends mongoose.Document {
  constructor(object) {
    super(object, CompositionSchema);
    this._type = 'FHIR::Composition';
  }
};


module.exports.CompositionSchema = CompositionSchema;
module.exports.Composition = Composition;
