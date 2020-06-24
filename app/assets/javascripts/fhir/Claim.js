const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ClaimAccidentSchema } = require('./ClaimAccident');
const { ClaimCareTeamSchema } = require('./ClaimCareTeam');
const { ClaimDiagnosisSchema } = require('./ClaimDiagnosis');
const { ClaimInsuranceSchema } = require('./ClaimInsurance');
const { ClaimItemSchema } = require('./ClaimItem');
const { ClaimPayeeSchema } = require('./ClaimPayee');
const { ClaimProcedureSchema } = require('./ClaimProcedure');
const { ClaimRelatedSchema } = require('./ClaimRelated');
const { ClaimStatusSchema } = require('./ClaimStatus');
const { ClaimSupportingInfoSchema } = require('./ClaimSupportingInfo');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { UseSchema } = require('./Use');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ClaimStatusSchema,
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
   fundsReserve : CodeableConceptSchema,
   related : [ClaimRelatedSchema],
   prescription : ReferenceSchema,
   originalPrescription : ReferenceSchema,
   payee : ClaimPayeeSchema,
   referral : ReferenceSchema,
   facility : ReferenceSchema,
   careTeam : [ClaimCareTeamSchema],
   supportingInfo : [ClaimSupportingInfoSchema],
   diagnosis : [ClaimDiagnosisSchema],
   procedure : [ClaimProcedureSchema],
   insurance : [ClaimInsuranceSchema],
   accident : ClaimAccidentSchema,
   item : [ClaimItemSchema],
   total : MoneySchema,
   fhirTitle: { type: String, default: 'Claim' },
});

class Claim extends mongoose.Document {
  constructor(object) {
    super(object, ClaimSchema);
    this._type = 'FHIR::Claim';
  }
};


module.exports.ClaimSchema = ClaimSchema;
module.exports.Claim = Claim;
