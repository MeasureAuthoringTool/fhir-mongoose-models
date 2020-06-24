const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DomainResourceSchema } = require('./DomainResource');
const { GuidanceResponseStatusSchema } = require('./GuidanceResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GuidanceResponseSchema = DomainResourceSchemaFunction({
   requestIdentifier : IdentifierSchema,
   identifier : [IdentifierSchema],
   moduleUri : String,
   moduleCanonical : String,
   moduleCodeableConcept : CodeableConceptSchema,
   status : GuidanceResponseStatusSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   occurrenceDateTime : DateTime,
   performer : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   evaluationMessage : [ReferenceSchema],
   outputParameters : ReferenceSchema,
   result : ReferenceSchema,
   dataRequirement : [DataRequirementSchema],
   fhirTitle: { type: String, default: 'GuidanceResponse' },
});

class GuidanceResponse extends mongoose.Document {
  constructor(object) {
    super(object, GuidanceResponseSchema);
    this._type = 'FHIR::GuidanceResponse';
  }
};


module.exports.GuidanceResponseSchema = GuidanceResponseSchema;
module.exports.GuidanceResponse = GuidanceResponse;
