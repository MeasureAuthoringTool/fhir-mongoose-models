const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DiagnosticReportMediaSchema } = require('./allSchemaHeaders.js');

DiagnosticReportMediaSchema.add(BackboneElementSchema);
DiagnosticReportMediaSchema.remove('id');
DiagnosticReportMediaSchema.add({
  comment: PrimitiveStringSchema,
  link: ReferenceSchema,
});

module.exports.DiagnosticReportMediaSchema = DiagnosticReportMediaSchema;
