const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { OrganizationAffiliationSchema } = require('./allSchemaHeaders.js');

OrganizationAffiliationSchema.add(DomainResourceSchema);
OrganizationAffiliationSchema.remove('id');
OrganizationAffiliationSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  period: PeriodSchema,
  organization: ReferenceSchema,
  participatingOrganization: ReferenceSchema,
  network: [ReferenceSchema],
  code: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  location: [ReferenceSchema],
  healthcareService: [ReferenceSchema],
  telecom: [ContactPointSchema],
  endpoint: [ReferenceSchema],
});

module.exports.OrganizationAffiliationSchema = OrganizationAffiliationSchema;
