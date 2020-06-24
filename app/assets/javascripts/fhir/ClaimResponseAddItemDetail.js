const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSubDetailSchema } = require('./ClaimResponseAddItemDetailSubDetail');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseAddItemDetailSchema = BackboneElementSchemaFunction({
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   subDetail : [ClaimResponseAddItemDetailSubDetailSchema],
   fhirTitle: { type: String, default: 'ClaimResponseAddItemDetail' },
});

class ClaimResponseAddItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemDetailSchema);
    this._type = 'FHIR::ClaimResponseAddItemDetail';
  }
};


module.exports.ClaimResponseAddItemDetailSchema = ClaimResponseAddItemDetailSchema;
module.exports.ClaimResponseAddItemDetail = ClaimResponseAddItemDetail;
