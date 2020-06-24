const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RiskAssessmentPredictionSchema } = require('./RiskAssessmentPrediction');
const { RiskAssessmentStatusSchema } = require('./RiskAssessmentStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskAssessmentSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : ReferenceSchema,
   parent : ReferenceSchema,
   status : RiskAssessmentStatusSchema,
   method : CodeableConceptSchema,
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   condition : ReferenceSchema,
   performer : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   basis : [ReferenceSchema],
   prediction : [RiskAssessmentPredictionSchema],
   mitigation : String,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'RiskAssessment' },
});

class RiskAssessment extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentSchema);
    this._type = 'FHIR::RiskAssessment';
  }
};


module.exports.RiskAssessmentSchema = RiskAssessmentSchema;
module.exports.RiskAssessment = RiskAssessment;
