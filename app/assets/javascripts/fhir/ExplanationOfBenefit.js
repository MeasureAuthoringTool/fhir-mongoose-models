const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { ExplanationOfBenefitAccidentSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitBenefitBalanceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitCareTeamSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitDiagnosisSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitInsuranceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitPayeeSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitPaymentSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitProcedureSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitProcessNoteSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitRelatedSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitStatusSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitSupportingInfoSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitTotalSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');
const { UseSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitSchema.add(DomainResourceSchema);
ExplanationOfBenefitSchema.remove('id');
ExplanationOfBenefitSchema.add({
  identifier: [IdentifierSchema],
  status: ExplanationOfBenefitStatusSchema,
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
  fundsReserveRequested: CodeableConceptSchema,
  fundsReserve: CodeableConceptSchema,
  related: [ExplanationOfBenefitRelatedSchema],
  prescription: ReferenceSchema,
  originalPrescription: ReferenceSchema,
  payee: ExplanationOfBenefitPayeeSchema,
  referral: ReferenceSchema,
  facility: ReferenceSchema,
  claim: ReferenceSchema,
  claimResponse: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  preAuthRef: [PrimitiveStringSchema],
  preAuthRefPeriod: [PeriodSchema],
  careTeam: [ExplanationOfBenefitCareTeamSchema],
  supportingInfo: [ExplanationOfBenefitSupportingInfoSchema],
  diagnosis: [ExplanationOfBenefitDiagnosisSchema],
  procedure: [ExplanationOfBenefitProcedureSchema],
  precedence: PrimitivePositiveIntSchema,
  insurance: [ExplanationOfBenefitInsuranceSchema],
  accident: ExplanationOfBenefitAccidentSchema,
  item: [ExplanationOfBenefitItemSchema],
  addItem: [ExplanationOfBenefitAddItemSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  total: [ExplanationOfBenefitTotalSchema],
  payment: ExplanationOfBenefitPaymentSchema,
  formCode: CodeableConceptSchema,
  form: AttachmentSchema,
  processNote: [ExplanationOfBenefitProcessNoteSchema],
  benefitPeriod: PeriodSchema,
  benefitBalance: [ExplanationOfBenefitBenefitBalanceSchema],
});

module.exports.ExplanationOfBenefitSchema = ExplanationOfBenefitSchema;
