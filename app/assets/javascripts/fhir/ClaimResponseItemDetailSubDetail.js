const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');

ClaimResponseItemDetailSubDetailSchema.add(BackboneElementSchema);
ClaimResponseItemDetailSubDetailSchema.remove('id');
ClaimResponseItemDetailSubDetailSchema.add({
  subDetailSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
});

module.exports.ClaimResponseItemDetailSubDetailSchema = ClaimResponseItemDetailSubDetailSchema;
