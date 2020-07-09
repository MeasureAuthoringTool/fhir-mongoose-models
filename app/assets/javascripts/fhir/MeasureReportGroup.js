const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupPopulationSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupSchema.add(BackboneElementSchema);
MeasureReportGroupSchema.remove('id');
MeasureReportGroupSchema.add({
  code: CodeableConceptSchema,
  population: [MeasureReportGroupPopulationSchema],
  measureScore: QuantitySchema,
  stratifier: [MeasureReportGroupStratifierSchema],
});

module.exports.MeasureReportGroupSchema = MeasureReportGroupSchema;
