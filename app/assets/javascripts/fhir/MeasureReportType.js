const { ElementSchema } = require('./Element');
const { MeasureReportTypeSchema } = require('./allSchemaHeaders.js');

MeasureReportTypeSchema.add(ElementSchema);
MeasureReportTypeSchema.remove('id');
MeasureReportTypeSchema.add({
  value: String,
});

module.exports.MeasureReportTypeSchema = MeasureReportTypeSchema;
