const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimCareTeamSchema } = require('./allSchemaHeaders.js');

ClaimCareTeamSchema.add(BackboneElementSchema);
ClaimCareTeamSchema.remove('id');
ClaimCareTeamSchema.add({
  sequence: PrimitivePositiveIntSchema,
  provider: ReferenceSchema,
  responsible: PrimitiveBooleanSchema,
  role: CodeableConceptSchema,
  qualification: CodeableConceptSchema,
});

module.exports.ClaimCareTeamSchema = ClaimCareTeamSchema;
