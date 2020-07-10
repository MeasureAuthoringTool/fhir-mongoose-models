const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductAuthorizationJurisdictionalAuthorizationSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductAuthorizationProcedureSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductAuthorizationSchema } = require('./allSchemaHeaders.js');

MedicinalProductAuthorizationSchema.add(DomainResourceSchema);
MedicinalProductAuthorizationSchema.remove('id');
MedicinalProductAuthorizationSchema.add({
  identifier: [IdentifierSchema],
  subject: ReferenceSchema,
  country: [CodeableConceptSchema],
  jurisdiction: [CodeableConceptSchema],
  status: CodeableConceptSchema,
  statusDate: PrimitiveDateTimeSchema,
  restoreDate: PrimitiveDateTimeSchema,
  validityPeriod: PeriodSchema,
  dataExclusivityPeriod: PeriodSchema,
  dateOfFirstAuthorization: PrimitiveDateTimeSchema,
  internationalBirthDate: PrimitiveDateTimeSchema,
  legalBasis: CodeableConceptSchema,
  jurisdictionalAuthorization: [MedicinalProductAuthorizationJurisdictionalAuthorizationSchema],
  holder: ReferenceSchema,
  regulator: ReferenceSchema,
  procedure: MedicinalProductAuthorizationProcedureSchema,
});

module.exports.MedicinalProductAuthorizationSchema = MedicinalProductAuthorizationSchema;
