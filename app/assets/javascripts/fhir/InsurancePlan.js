const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanContactSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanSchema } = require('./allSchemaHeaders.js');

InsurancePlanSchema.add(DomainResourceSchema);
InsurancePlanSchema.remove('id');
InsurancePlanSchema.add({
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
});

module.exports.InsurancePlanSchema = InsurancePlanSchema;
