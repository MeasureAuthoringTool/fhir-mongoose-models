const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AgeSchema } = require('./Age');
const { AllergyIntoleranceCategorySchema } = require('./AllergyIntoleranceCategory');
const { AllergyIntoleranceCriticalitySchema } = require('./AllergyIntoleranceCriticality');
const { AllergyIntoleranceReactionSchema } = require('./AllergyIntoleranceReaction');
const { AllergyIntoleranceTypeSchema } = require('./AllergyIntoleranceType');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   clinicalStatus : CodeableConceptSchema,
   verificationStatus : CodeableConceptSchema,
   type : AllergyIntoleranceTypeSchema,
   category : [AllergyIntoleranceCategorySchema],
   criticality : AllergyIntoleranceCriticalitySchema,
   code : CodeableConceptSchema,
   patient : ReferenceSchema,
   encounter : ReferenceSchema,
   onsetDateTime : DateTime,
   onsetAge : AgeSchema,
   onsetPeriod : PeriodSchema,
   onsetRange : RangeSchema,
   onsetString : String,
   recordedDate : DateTime,
   recorder : ReferenceSchema,
   asserter : ReferenceSchema,
   lastOccurrence : DateTime,
   note : [AnnotationSchema],
   reaction : [AllergyIntoleranceReactionSchema],
   fhirTitle: { type: String, default: 'AllergyIntolerance' },
});

class AllergyIntolerance extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSchema);
    this._type = 'FHIR::AllergyIntolerance';
  }
};


module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = AllergyIntolerance;
