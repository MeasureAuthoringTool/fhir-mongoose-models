const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupStratifierStratumPopulationSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupStratifierStratumPopulationSchema.add(BackboneElementSchema);
MeasureReportGroupStratifierStratumPopulationSchema.remove('id');
MeasureReportGroupStratifierStratumPopulationSchema.add({
  code: CodeableConceptSchema,
  count: PrimitiveIntegerSchema,
  subjectResults: ReferenceSchema,
});

module.exports.MeasureReportGroupStratifierStratumPopulationSchema = MeasureReportGroupStratifierStratumPopulationSchema;
