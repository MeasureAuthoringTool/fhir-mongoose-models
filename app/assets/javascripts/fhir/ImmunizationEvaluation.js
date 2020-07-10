const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ImmunizationEvaluationStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationEvaluationSchema } = require('./allSchemaHeaders.js');

ImmunizationEvaluationSchema.add(DomainResourceSchema);
ImmunizationEvaluationSchema.remove('id');
ImmunizationEvaluationSchema.add({
  identifier: [IdentifierSchema],
  status: ImmunizationEvaluationStatusSchema,
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  authority: ReferenceSchema,
  targetDisease: CodeableConceptSchema,
  immunizationEvent: ReferenceSchema,
  doseStatus: CodeableConceptSchema,
  doseStatusReason: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  series: PrimitiveStringSchema,
  doseNumberPositiveInt: PrimitivePositiveIntSchema,
  doseNumberString: PrimitiveStringSchema,
  seriesDosesPositiveInt: PrimitivePositiveIntSchema,
  seriesDosesString: PrimitiveStringSchema,
});

module.exports.ImmunizationEvaluationSchema = ImmunizationEvaluationSchema;
