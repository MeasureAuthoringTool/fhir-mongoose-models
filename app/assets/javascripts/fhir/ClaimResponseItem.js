const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponseItemDetailSchema } = require('./ClaimResponseItemDetail');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');

const ClaimResponseItemSchema = BackboneElementSchemaFunction({
  itemSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  detail: [ClaimResponseItemDetailSchema],
  typeName: { type: String, default: 'ClaimResponseItem' },
  _type: { type: String, default: 'FHIR::ClaimResponseItem' },
});

class ClaimResponseItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemSchema);
    this.typeName = 'ClaimResponseItem';
    this._type = 'FHIR::ClaimResponseItem';
  }
}

module.exports.ClaimResponseItemSchema = ClaimResponseItemSchema;
module.exports.ClaimResponseItem = ClaimResponseItem;
