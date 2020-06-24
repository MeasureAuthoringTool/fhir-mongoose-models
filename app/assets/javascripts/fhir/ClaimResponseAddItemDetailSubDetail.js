const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
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

const ClaimResponseAddItemDetailSubDetailSchema = BackboneElementSchemaFunction({
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   fhirTitle: { type: String, default: 'ClaimResponseAddItemDetailSubDetail' },
});

class ClaimResponseAddItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemDetailSubDetailSchema);
    this._type = 'FHIR::ClaimResponseAddItemDetailSubDetail';
  }
};


module.exports.ClaimResponseAddItemDetailSubDetailSchema = ClaimResponseAddItemDetailSubDetailSchema;
module.exports.ClaimResponseAddItemDetailSubDetail = ClaimResponseAddItemDetailSubDetail;
