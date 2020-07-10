const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitProcedureSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitProcedureSchema.add(BackboneElementSchema);
ExplanationOfBenefitProcedureSchema.remove('id');
ExplanationOfBenefitProcedureSchema.add({
  sequence: PrimitivePositiveIntSchema,
  type: [CodeableConceptSchema],
  date: PrimitiveDateTimeSchema,
  procedureCodeableConcept: CodeableConceptSchema,
  procedureReference: ReferenceSchema,
  udi: [ReferenceSchema],
});

module.exports.ExplanationOfBenefitProcedureSchema = ExplanationOfBenefitProcedureSchema;
