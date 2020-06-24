const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationEvaluationStatusSchema } = require('./ImmunizationEvaluationStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationEvaluationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ImmunizationEvaluationStatusSchema,
   patient : ReferenceSchema,
   date : DateTime,
   authority : ReferenceSchema,
   targetDisease : CodeableConceptSchema,
   immunizationEvent : ReferenceSchema,
   doseStatus : CodeableConceptSchema,
   doseStatusReason : [CodeableConceptSchema],
   description : String,
   series : String,
   doseNumberPositiveInt : Number,
   doseNumberString : String,
   seriesDosesPositiveInt : Number,
   seriesDosesString : String,
   fhirTitle: { type: String, default: 'ImmunizationEvaluation' },
});

class ImmunizationEvaluation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEvaluationSchema);
    this._type = 'FHIR::ImmunizationEvaluation';
  }
};


module.exports.ImmunizationEvaluationSchema = ImmunizationEvaluationSchema;
module.exports.ImmunizationEvaluation = ImmunizationEvaluation;
