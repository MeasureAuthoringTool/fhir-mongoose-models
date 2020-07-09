const { ElementSchema } = require('./Element');
const { MeasureReportStatusSchema } = require('./allSchemaHeaders.js');

MeasureReportStatusSchema.add(ElementSchema);
MeasureReportStatusSchema.remove('id');
MeasureReportStatusSchema.add({
  value: String,
});

module.exports.MeasureReportStatusSchema = MeasureReportStatusSchema;
