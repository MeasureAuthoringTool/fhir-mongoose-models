const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductAuthorizationJurisdictionalAuthorizationSchema } = require('./allSchemaHeaders.js');

MedicinalProductAuthorizationJurisdictionalAuthorizationSchema.add(BackboneElementSchema);
MedicinalProductAuthorizationJurisdictionalAuthorizationSchema.remove('id');
MedicinalProductAuthorizationJurisdictionalAuthorizationSchema.add({
  identifier: [IdentifierSchema],
  country: CodeableConceptSchema,
  jurisdiction: [CodeableConceptSchema],
  legalStatusOfSupply: CodeableConceptSchema,
  validityPeriod: PeriodSchema,
});

module.exports.MedicinalProductAuthorizationJurisdictionalAuthorizationSchema = MedicinalProductAuthorizationJurisdictionalAuthorizationSchema;
