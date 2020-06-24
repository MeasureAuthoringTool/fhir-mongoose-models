const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitAddItemDetailSchema } = require('./ExplanationOfBenefitAddItemDetail');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
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

const ExplanationOfBenefitAddItemSchema = BackboneElementSchemaFunction({
   itemSequence : [Number],
   detailSequence : [Number],
   subDetailSequence : [Number],
   provider : [ReferenceSchema],
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
   bodySite : CodeableConceptSchema,
   subSite : [CodeableConceptSchema],
   noteNumber : [Number],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   detail : [ExplanationOfBenefitAddItemDetailSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitAddItem' },
});

class ExplanationOfBenefitAddItem extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemSchema);
    this._type = 'FHIR::ExplanationOfBenefitAddItem';
  }
};


module.exports.ExplanationOfBenefitAddItemSchema = ExplanationOfBenefitAddItemSchema;
module.exports.ExplanationOfBenefitAddItem = ExplanationOfBenefitAddItem;
