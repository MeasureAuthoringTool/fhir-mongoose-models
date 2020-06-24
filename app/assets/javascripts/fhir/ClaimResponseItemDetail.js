const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponseItemDetailSubDetailSchema } = require('./ClaimResponseItemDetailSubDetail');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseItemDetailSchema = BackboneElementSchemaFunction({
   detailSequence : Number,
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   subDetail : [ClaimResponseItemDetailSubDetailSchema],
   fhirTitle: { type: String, default: 'ClaimResponseItemDetail' },
});

class ClaimResponseItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemDetailSchema);
    this._type = 'FHIR::ClaimResponseItemDetail';
  }
};


module.exports.ClaimResponseItemDetailSchema = ClaimResponseItemDetailSchema;
module.exports.ClaimResponseItemDetail = ClaimResponseItemDetail;
