const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
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

const ClaimItemDetailSubDetailSchema = BackboneElementSchemaFunction({
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
   fhirTitle: { type: String, default: 'ClaimItemDetailSubDetail' },
});

class ClaimItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemDetailSubDetailSchema);
    this._type = 'FHIR::ClaimItemDetailSubDetail';
  }
};


module.exports.ClaimItemDetailSubDetailSchema = ClaimItemDetailSubDetailSchema;
module.exports.ClaimItemDetailSubDetail = ClaimItemDetailSubDetail;
