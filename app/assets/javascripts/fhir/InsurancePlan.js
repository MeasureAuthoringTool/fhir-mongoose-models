const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { InsurancePlanContactSchema } = require('./InsurancePlanContact');
const { InsurancePlanCoverageSchema } = require('./InsurancePlanCoverage');
const { InsurancePlanPlanSchema } = require('./InsurancePlanPlan');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');

const InsurancePlanSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: PublicationStatusSchema,
  type: [CodeableConceptSchema],
  name: PrimitiveStringSchema,
  alias: [PrimitiveStringSchema],
  period: PeriodSchema,
  ownedBy: ReferenceSchema,
  administeredBy: ReferenceSchema,
  coverageArea: [ReferenceSchema],
  contact: [InsurancePlanContactSchema],
  endpoint: [ReferenceSchema],
  network: [ReferenceSchema],
  coverage: [InsurancePlanCoverageSchema],
  plan: [InsurancePlanPlanSchema],
  typeName: { type: String, default: 'InsurancePlan' },
  _type: { type: String, default: 'FHIR::InsurancePlan' },
});

class InsurancePlan extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanSchema);
    this.typeName = 'InsurancePlan';
    this._type = 'FHIR::InsurancePlan';
  }
}

module.exports.InsurancePlanSchema = InsurancePlanSchema;
module.exports.InsurancePlan = InsurancePlan;
