const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimProcedureSchema } = require('./allSchemaHeaders.js');

ClaimProcedureSchema.add(BackboneElementSchema);
ClaimProcedureSchema.remove('id');
ClaimProcedureSchema.add({
  sequence: PrimitivePositiveIntSchema,
  type: [CodeableConceptSchema],
  date: PrimitiveDateTimeSchema,
  procedureCodeableConcept: CodeableConceptSchema,
  procedureReference: ReferenceSchema,
  udi: [ReferenceSchema],
});

module.exports.ClaimProcedureSchema = ClaimProcedureSchema;
