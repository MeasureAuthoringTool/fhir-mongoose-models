const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupStratifierSchema.add(BackboneElementSchema);
MeasureReportGroupStratifierSchema.remove('id');
MeasureReportGroupStratifierSchema.add({
  code: [CodeableConceptSchema],
  stratum: [MeasureReportGroupStratifierStratumSchema],
});

module.exports.MeasureReportGroupStratifierSchema = MeasureReportGroupStratifierSchema;
