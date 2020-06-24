const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { InsurancePlanContactSchema } = require('./InsurancePlanContact');
const { InsurancePlanCoverageSchema } = require('./InsurancePlanCoverage');
const { InsurancePlanPlanSchema } = require('./InsurancePlanPlan');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : PublicationStatusSchema,
   type : [CodeableConceptSchema],
   name : String,
   alias : [String],
   period : PeriodSchema,
   ownedBy : ReferenceSchema,
   administeredBy : ReferenceSchema,
   coverageArea : [ReferenceSchema],
   contact : [InsurancePlanContactSchema],
   endpoint : [ReferenceSchema],
   network : [ReferenceSchema],
   coverage : [InsurancePlanCoverageSchema],
   plan : [InsurancePlanPlanSchema],
   fhirTitle: { type: String, default: 'InsurancePlan' },
});

class InsurancePlan extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanSchema);
    this._type = 'FHIR::InsurancePlan';
  }
};


module.exports.InsurancePlanSchema = InsurancePlanSchema;
module.exports.InsurancePlan = InsurancePlan;
