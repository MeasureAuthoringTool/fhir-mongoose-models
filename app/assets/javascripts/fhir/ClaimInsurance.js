const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimInsuranceSchema } = require('./allSchemaHeaders.js');

ClaimInsuranceSchema.add(BackboneElementSchema);
ClaimInsuranceSchema.remove('id');
ClaimInsuranceSchema.add({
  sequence: PrimitivePositiveIntSchema,
  focal: PrimitiveBooleanSchema,
  identifier: IdentifierSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
  preAuthRef: [PrimitiveStringSchema],
  claimResponse: ReferenceSchema,
});

module.exports.ClaimInsuranceSchema = ClaimInsuranceSchema;
