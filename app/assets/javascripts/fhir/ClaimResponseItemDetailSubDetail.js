const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');

const ClaimResponseItemDetailSubDetailSchema = BackboneElementSchemaFunction({
  subDetailSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  typeName: { type: String, default: 'ClaimResponseItemDetailSubDetail' },
  _type: { type: String, default: 'FHIR::ClaimResponseItemDetailSubDetail' },
});

class ClaimResponseItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemDetailSubDetailSchema);
    this.typeName = 'ClaimResponseItemDetailSubDetail';
    this._type = 'FHIR::ClaimResponseItemDetailSubDetail';
  }
}

module.exports.ClaimResponseItemDetailSubDetailSchema = ClaimResponseItemDetailSubDetailSchema;
module.exports.ClaimResponseItemDetailSubDetail = ClaimResponseItemDetailSubDetail;
