const { ElementSchema } = require('./Element');
const { DiagnosticReportStatusSchema } = require('./allSchemaHeaders.js');

DiagnosticReportStatusSchema.add(ElementSchema);
DiagnosticReportStatusSchema.remove('id');
DiagnosticReportStatusSchema.add({
  value: String,
});

module.exports.DiagnosticReportStatusSchema = DiagnosticReportStatusSchema;
