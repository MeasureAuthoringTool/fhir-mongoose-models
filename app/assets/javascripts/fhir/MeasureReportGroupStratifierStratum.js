const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumComponentSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumPopulationSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupStratifierStratumSchema.add(BackboneElementSchema);
MeasureReportGroupStratifierStratumSchema.remove('id');
MeasureReportGroupStratifierStratumSchema.add({
  value: CodeableConceptSchema,
  component: [MeasureReportGroupStratifierStratumComponentSchema],
  population: [MeasureReportGroupStratifierStratumPopulationSchema],
  measureScore: QuantitySchema,
});

module.exports.MeasureReportGroupStratifierStratumSchema = MeasureReportGroupStratifierStratumSchema;
