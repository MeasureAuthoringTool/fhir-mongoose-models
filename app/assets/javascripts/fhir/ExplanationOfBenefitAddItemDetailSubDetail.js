const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
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

const ExplanationOfBenefitAddItemDetailSubDetailSchema = BackboneElementSchemaFunction({
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   noteNumber : [Number],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitAddItemDetailSubDetail' },
});

class ExplanationOfBenefitAddItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemDetailSubDetailSchema);
    this._type = 'FHIR::ExplanationOfBenefitAddItemDetailSubDetail';
  }
};


module.exports.ExplanationOfBenefitAddItemDetailSubDetailSchema = ExplanationOfBenefitAddItemDetailSubDetailSchema;
module.exports.ExplanationOfBenefitAddItemDetailSubDetail = ExplanationOfBenefitAddItemDetailSubDetail;
