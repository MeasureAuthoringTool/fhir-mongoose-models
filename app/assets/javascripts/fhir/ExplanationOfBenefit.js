const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { ExplanationOfBenefitAccidentSchema } = require('./ExplanationOfBenefitAccident');
const { ExplanationOfBenefitAddItemSchema } = require('./ExplanationOfBenefitAddItem');
const { ExplanationOfBenefitBenefitBalanceSchema } = require('./ExplanationOfBenefitBenefitBalance');
const { ExplanationOfBenefitCareTeamSchema } = require('./ExplanationOfBenefitCareTeam');
const { ExplanationOfBenefitDiagnosisSchema } = require('./ExplanationOfBenefitDiagnosis');
const { ExplanationOfBenefitInsuranceSchema } = require('./ExplanationOfBenefitInsurance');
const { ExplanationOfBenefitItemSchema } = require('./ExplanationOfBenefitItem');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitPayeeSchema } = require('./ExplanationOfBenefitPayee');
const { ExplanationOfBenefitPaymentSchema } = require('./ExplanationOfBenefitPayment');
const { ExplanationOfBenefitProcedureSchema } = require('./ExplanationOfBenefitProcedure');
const { ExplanationOfBenefitProcessNoteSchema } = require('./ExplanationOfBenefitProcessNote');
const { ExplanationOfBenefitRelatedSchema } = require('./ExplanationOfBenefitRelated');
const { ExplanationOfBenefitStatusSchema } = require('./ExplanationOfBenefitStatus');
const { ExplanationOfBenefitSupportingInfoSchema } = require('./ExplanationOfBenefitSupportingInfo');
const { ExplanationOfBenefitTotalSchema } = require('./ExplanationOfBenefitTotal');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { UseSchema } = require('./Use');

const ExplanationOfBenefitSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'ExplanationOfBenefit' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefit' },
});

class ExplanationOfBenefit extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitSchema);
    this.typeName = 'ExplanationOfBenefit';
    this._type = 'FHIR::ExplanationOfBenefit';
  }
}

module.exports.ExplanationOfBenefitSchema = ExplanationOfBenefitSchema;
module.exports.ExplanationOfBenefit = ExplanationOfBenefit;
