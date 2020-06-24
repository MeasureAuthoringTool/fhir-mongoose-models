const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitAddItemDetailSubDetailSchema } = require('./ExplanationOfBenefitAddItemDetailSubDetail');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { MoneySchema } = require('./Money');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitAddItemDetailSchema = BackboneElementSchemaFunction({
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   noteNumber : [Number],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   subDetail : [ExplanationOfBenefitAddItemDetailSubDetailSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitAddItemDetail' },
});

class ExplanationOfBenefitAddItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemDetailSchema);
    this._type = 'FHIR::ExplanationOfBenefitAddItemDetail';
  }
};


module.exports.ExplanationOfBenefitAddItemDetailSchema = ExplanationOfBenefitAddItemDetailSchema;
module.exports.ExplanationOfBenefitAddItemDetail = ExplanationOfBenefitAddItemDetail;
