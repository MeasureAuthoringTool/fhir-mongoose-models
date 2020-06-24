const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseItemDetailSubDetailSchema = BackboneElementSchemaFunction({
   subDetailSequence : Number,
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   fhirTitle: { type: String, default: 'ClaimResponseItemDetailSubDetail' },
});

class ClaimResponseItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemDetailSubDetailSchema);
    this._type = 'FHIR::ClaimResponseItemDetailSubDetail';
  }
};


module.exports.ClaimResponseItemDetailSubDetailSchema = ClaimResponseItemDetailSubDetailSchema;
module.exports.ClaimResponseItemDetailSubDetail = ClaimResponseItemDetailSubDetail;
