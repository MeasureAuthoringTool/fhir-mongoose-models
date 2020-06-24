const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponseItemDetailSchema } = require('./ClaimResponseItemDetail');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseItemSchema = BackboneElementSchemaFunction({
   itemSequence : Number,
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   detail : [ClaimResponseItemDetailSchema],
   fhirTitle: { type: String, default: 'ClaimResponseItem' },
});

class ClaimResponseItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemSchema);
    this._type = 'FHIR::ClaimResponseItem';
  }
};


module.exports.ClaimResponseItemSchema = ClaimResponseItemSchema;
module.exports.ClaimResponseItem = ClaimResponseItem;
