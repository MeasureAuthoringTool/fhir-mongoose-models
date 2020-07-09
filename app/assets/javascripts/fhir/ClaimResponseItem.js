const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemDetailSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemSchema } = require('./allSchemaHeaders.js');

ClaimResponseItemSchema.add(BackboneElementSchema);
ClaimResponseItemSchema.remove('id');
ClaimResponseItemSchema.add({
  itemSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  detail: [ClaimResponseItemDetailSchema],
});

module.exports.ClaimResponseItemSchema = ClaimResponseItemSchema;
