const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MeasureReportGroupPopulationSchema } = require('./allSchemaHeaders.js');

MeasureReportGroupPopulationSchema.add(BackboneElementSchema);
MeasureReportGroupPopulationSchema.remove('id');
MeasureReportGroupPopulationSchema.add({
  code: CodeableConceptSchema,
  count: PrimitiveIntegerSchema,
  subjectResults: ReferenceSchema,
});

module.exports.MeasureReportGroupPopulationSchema = MeasureReportGroupPopulationSchema;
