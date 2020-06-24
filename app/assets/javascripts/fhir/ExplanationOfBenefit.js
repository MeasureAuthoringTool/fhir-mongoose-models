const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { ExplanationOfBenefitAccidentSchema } = require('./ExplanationOfBenefitAccident');
const { ExplanationOfBenefitAddItemSchema } = require('./ExplanationOfBenefitAddItem');
const { ExplanationOfBenefitBenefitBalanceSchema } = require('./ExplanationOfBenefitBenefitBalance');
const { ExplanationOfBenefitCareTeamSchema } = require('./ExplanationOfBenefitCareTeam');
const { ExplanationOfBenefitDiagnosisSchema } = require('./ExplanationOfBenefitDiagnosis');
const { ExplanationOfBenefitInsuranceSchema } = require('./ExplanationOfBenefitInsurance');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitItemSchema } = require('./ExplanationOfBenefitItem');
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
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { UseSchema } = require('./Use');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ExplanationOfBenefitStatusSchema,
   type : CodeableConceptSchema,
   subType : CodeableConceptSchema,
   use : UseSchema,
   patient : ReferenceSchema,
   billablePeriod : PeriodSchema,
   created : DateTime,
   enterer : ReferenceSchema,
   insurer : ReferenceSchema,
   provider : ReferenceSchema,
   priority : CodeableConceptSchema,
   fundsReserveRequested : CodeableConceptSchema,
   fundsReserve : CodeableConceptSchema,
   related : [ExplanationOfBenefitRelatedSchema],
   prescription : ReferenceSchema,
   originalPrescription : ReferenceSchema,
   payee : ExplanationOfBenefitPayeeSchema,
   referral : ReferenceSchema,
   facility : ReferenceSchema,
   claim : ReferenceSchema,
   claimResponse : ReferenceSchema,
   outcome : RemittanceOutcomeSchema,
   disposition : String,
   preAuthRef : [String],
   preAuthRefPeriod : [PeriodSchema],
   careTeam : [ExplanationOfBenefitCareTeamSchema],
   supportingInfo : [ExplanationOfBenefitSupportingInfoSchema],
   diagnosis : [ExplanationOfBenefitDiagnosisSchema],
   procedure : [ExplanationOfBenefitProcedureSchema],
   precedence : Number,
   insurance : [ExplanationOfBenefitInsuranceSchema],
   accident : ExplanationOfBenefitAccidentSchema,
   item : [ExplanationOfBenefitItemSchema],
   addItem : [ExplanationOfBenefitAddItemSchema],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   total : [ExplanationOfBenefitTotalSchema],
   payment : ExplanationOfBenefitPaymentSchema,
   formCode : CodeableConceptSchema,
   form : AttachmentSchema,
   processNote : [ExplanationOfBenefitProcessNoteSchema],
   benefitPeriod : PeriodSchema,
   benefitBalance : [ExplanationOfBenefitBenefitBalanceSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefit' },
});

class ExplanationOfBenefit extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitSchema);
    this._type = 'FHIR::ExplanationOfBenefit';
  }
};


module.exports.ExplanationOfBenefitSchema = ExplanationOfBenefitSchema;
module.exports.ExplanationOfBenefit = ExplanationOfBenefit;
