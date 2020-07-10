const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupStratifierComponentSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupStratifierSchema } = require('./allSchemaHeaders.js');

MeasureGroupStratifierSchema.add(BackboneElementSchema);
MeasureGroupStratifierSchema.remove('id');
MeasureGroupStratifierSchema.add({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
  component: [MeasureGroupStratifierComponentSchema],
});

module.exports.MeasureGroupStratifierSchema = MeasureGroupStratifierSchema;
