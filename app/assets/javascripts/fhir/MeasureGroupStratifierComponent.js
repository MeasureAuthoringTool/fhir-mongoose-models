const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupStratifierComponentSchema } = require('./allSchemaHeaders.js');

MeasureGroupStratifierComponentSchema.add(BackboneElementSchema);
MeasureGroupStratifierComponentSchema.remove('id');
MeasureGroupStratifierComponentSchema.add({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
});

module.exports.MeasureGroupStratifierComponentSchema = MeasureGroupStratifierComponentSchema;
