const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimItemDetailSubDetailSchema } = require('./ClaimItemDetailSubDetail');
const { CodeableConceptSchema } = require('./CodeableConcept');
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

const ClaimItemDetailSchema = BackboneElementSchemaFunction({
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
   subDetail : [ClaimItemDetailSubDetailSchema],
   fhirTitle: { type: String, default: 'ClaimItemDetail' },
});

class ClaimItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemDetailSchema);
    this._type = 'FHIR::ClaimItemDetail';
  }
};


module.exports.ClaimItemDetailSchema = ClaimItemDetailSchema;
module.exports.ClaimItemDetail = ClaimItemDetail;
