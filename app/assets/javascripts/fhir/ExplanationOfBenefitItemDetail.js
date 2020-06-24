const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitItemDetailSubDetailSchema } = require('./ExplanationOfBenefitItemDetailSubDetail');
const { MoneySchema } = require('./Money');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitItemDetailSchema = BackboneElementSchemaFunction({
   sequence : Number,
   revenue : CodeableConceptSchema,
   category : CodeableConceptSchema,
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   programCode : [CodeableConceptSchema],
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   udi : [ReferenceSchema],
   noteNumber : [Number],
   adjudication : [ExplanationOfBenefitItemAdjudicationSchema],
   subDetail : [ExplanationOfBenefitItemDetailSubDetailSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitItemDetail' },
});

class ExplanationOfBenefitItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemDetailSchema);
    this._type = 'FHIR::ExplanationOfBenefitItemDetail';
  }
};


module.exports.ExplanationOfBenefitItemDetailSchema = ExplanationOfBenefitItemDetailSchema;
module.exports.ExplanationOfBenefitItemDetail = ExplanationOfBenefitItemDetail;
