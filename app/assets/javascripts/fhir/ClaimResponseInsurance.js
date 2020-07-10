const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseInsuranceSchema } = require('./allSchemaHeaders.js');

ClaimResponseInsuranceSchema.add(BackboneElementSchema);
ClaimResponseInsuranceSchema.remove('id');
ClaimResponseInsuranceSchema.add({
  sequence: PrimitivePositiveIntSchema,
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
  claimResponse: ReferenceSchema,
});

module.exports.ClaimResponseInsuranceSchema = ClaimResponseInsuranceSchema;
