const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConditionEvidenceSchema } = require('./ConditionEvidence');
const { ConditionStageSchema } = require('./ConditionStage');
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

const ConditionSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   clinicalStatus : CodeableConceptSchema,
   verificationStatus : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   severity : CodeableConceptSchema,
   code : CodeableConceptSchema,
   bodySite : [CodeableConceptSchema],
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   onsetDateTime : DateTime,
   onsetAge : AgeSchema,
   onsetPeriod : PeriodSchema,
   onsetRange : RangeSchema,
   onsetString : String,
   abatementDateTime : DateTime,
   abatementAge : AgeSchema,
   abatementPeriod : PeriodSchema,
   abatementRange : RangeSchema,
   abatementString : String,
   recordedDate : DateTime,
   recorder : ReferenceSchema,
   asserter : ReferenceSchema,
   stage : [ConditionStageSchema],
   evidence : [ConditionEvidenceSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'Condition' },
});

class Condition extends mongoose.Document {
  constructor(object) {
    super(object, ConditionSchema);
    this._type = 'FHIR::Condition';
  }
};


module.exports.ConditionSchema = ConditionSchema;
module.exports.Condition = Condition;
