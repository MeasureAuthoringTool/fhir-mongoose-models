const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumComponentSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupStratifierStratumComponentSchema.add(BackboneElementSchema);
MeasureReportGroupStratifierStratumComponentSchema.remove('id');
MeasureReportGroupStratifierStratumComponentSchema.add({
  code: CodeableConceptSchema,
  value: CodeableConceptSchema,
});

module.exports.MeasureReportGroupStratifierStratumComponentSchema = MeasureReportGroupStratifierStratumComponentSchema;
