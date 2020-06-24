const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitItemDetailSchema } = require('./ExplanationOfBenefitItemDetail');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitItemSchema = BackboneElementSchemaFunction({
   sequence : Number,
   careTeamSequence : [Number],
   diagnosisSequence : [Number],
   procedureSequence : [Number],
   informationSequence : [Number],
   revenue : CodeableConceptSchema,
   category : CodeableConceptSchema,
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   programCode : [CodeableConceptSchema],
   servicedDate : FHIRDate,
   servicedPeriod : PeriodSchema,
   locationCodeableConcept : CodeableConceptSchema,
   locationAddress : AddressSchema,
   locationReference : ReferenceSchema,
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   udi : [ReferenceSchema],
   bodySite : CodeableConceptSchema,
   subSite : [CodeableConceptSchema],
   encounter : [ReferenceSchema],
   noteNumber : [Number],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   detail : [ExplanationOfBenefitItemDetailSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitItem' },
});

class ExplanationOfBenefitItem extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemSchema);
    this._type = 'FHIR::ExplanationOfBenefitItem';
  }
};


module.exports.ExplanationOfBenefitItemSchema = ExplanationOfBenefitItemSchema;
module.exports.ExplanationOfBenefitItem = ExplanationOfBenefitItem;
