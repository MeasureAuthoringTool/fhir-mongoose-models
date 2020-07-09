const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemDetailSchema } = require('./allSchemaHeaders.js');

ClaimResponseItemDetailSchema.add(BackboneElementSchema);
ClaimResponseItemDetailSchema.remove('id');
ClaimResponseItemDetailSchema.add({
  detailSequence: PrimitivePositiveIntSchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  subDetail: [ClaimResponseItemDetailSubDetailSchema],
});

module.exports.ClaimResponseItemDetailSchema = ClaimResponseItemDetailSchema;
