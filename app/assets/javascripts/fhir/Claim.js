const { ClaimAccidentSchema } = require('./allSchemaHeaders.js');
const { ClaimCareTeamSchema } = require('./allSchemaHeaders.js');
const { ClaimDiagnosisSchema } = require('./allSchemaHeaders.js');
const { ClaimInsuranceSchema } = require('./allSchemaHeaders.js');
const { ClaimItemSchema } = require('./allSchemaHeaders.js');
const { ClaimPayeeSchema } = require('./allSchemaHeaders.js');
const { ClaimProcedureSchema } = require('./allSchemaHeaders.js');
const { ClaimRelatedSchema } = require('./allSchemaHeaders.js');
const { ClaimStatusSchema } = require('./allSchemaHeaders.js');
const { ClaimSupportingInfoSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { UseSchema } = require('./allSchemaHeaders.js');
const { ClaimSchema } = require('./allSchemaHeaders.js');

ClaimSchema.add(DomainResourceSchema);
ClaimSchema.remove('id');
ClaimSchema.add({
  identifier: [IdentifierSchema],
  status: ClaimStatusSchema,
  type: CodeableConceptSchema,
  subType: CodeableConceptSchema,
  use: UseSchema,
  patient: ReferenceSchema,
  billablePeriod: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  enterer: ReferenceSchema,
  insurer: ReferenceSchema,
  provider: ReferenceSchema,
  priority: CodeableConceptSchema,
  fundsReserve: CodeableConceptSchema,
  related: [ClaimRelatedSchema],
  prescription: ReferenceSchema,
  originalPrescription: ReferenceSchema,
  payee: ClaimPayeeSchema,
  referral: ReferenceSchema,
  facility: ReferenceSchema,
  careTeam: [ClaimCareTeamSchema],
  supportingInfo: [ClaimSupportingInfoSchema],
  diagnosis: [ClaimDiagnosisSchema],
  procedure: [ClaimProcedureSchema],
  insurance: [ClaimInsuranceSchema],
  accident: ClaimAccidentSchema,
  item: [ClaimItemSchema],
  total: MoneySchema,
});

module.exports.ClaimSchema = ClaimSchema;
