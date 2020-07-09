const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupPopulationSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupStratifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MeasureGroupSchema } = require('./allSchemaHeaders.js');

MeasureGroupSchema.add(BackboneElementSchema);
MeasureGroupSchema.remove('id');
MeasureGroupSchema.add({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  population: [MeasureGroupPopulationSchema],
  stratifier: [MeasureGroupStratifierSchema],
});

module.exports.MeasureGroupSchema = MeasureGroupSchema;
