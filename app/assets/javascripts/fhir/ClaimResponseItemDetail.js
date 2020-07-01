const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponseItemDetailSubDetailSchema } = require('./ClaimResponseItemDetailSubDetail');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');

const ClaimResponseItemDetailSchema = BackboneElementSchemaFunction({
  detailSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  subDetail: [ClaimResponseItemDetailSubDetailSchema],
  typeName: { type: String, default: 'ClaimResponseItemDetail' },
  _type: { type: String, default: 'FHIR::ClaimResponseItemDetail' },
});

class ClaimResponseItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemDetailSchema);
    this.typeName = 'ClaimResponseItemDetail';
    this._type = 'FHIR::ClaimResponseItemDetail';
  }
}

module.exports.ClaimResponseItemDetailSchema = ClaimResponseItemDetailSchema;
module.exports.ClaimResponseItemDetail = ClaimResponseItemDetail;
