const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
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

const ExplanationOfBenefitItemDetailSubDetailSchema = BackboneElementSchemaFunction({
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
   fhirTitle: { type: String, default: 'ExplanationOfBenefitItemDetailSubDetail' },
});

class ExplanationOfBenefitItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemDetailSubDetailSchema);
    this._type = 'FHIR::ExplanationOfBenefitItemDetailSubDetail';
  }
};


module.exports.ExplanationOfBenefitItemDetailSubDetailSchema = ExplanationOfBenefitItemDetailSubDetailSchema;
module.exports.ExplanationOfBenefitItemDetailSubDetail = ExplanationOfBenefitItemDetailSubDetail;
