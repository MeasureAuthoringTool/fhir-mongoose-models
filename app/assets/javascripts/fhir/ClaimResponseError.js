const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseErrorSchema } = require('./allSchemaHeaders.js');

ClaimResponseErrorSchema.add(BackboneElementSchema);
ClaimResponseErrorSchema.remove('id');
ClaimResponseErrorSchema.add({
  itemSequence: PrimitivePositiveIntSchema,
  detailSequence: PrimitivePositiveIntSchema,
  subDetailSequence: PrimitivePositiveIntSchema,
  code: CodeableConceptSchema,
});

module.exports.ClaimResponseErrorSchema = ClaimResponseErrorSchema;
