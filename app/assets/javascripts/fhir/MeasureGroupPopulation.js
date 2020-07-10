const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupPopulationSchema } = require('./allSchemaHeaders.js');

MeasureGroupPopulationSchema.add(BackboneElementSchema);
MeasureGroupPopulationSchema.remove('id');
MeasureGroupPopulationSchema.add({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
});

module.exports.MeasureGroupPopulationSchema = MeasureGroupPopulationSchema;
