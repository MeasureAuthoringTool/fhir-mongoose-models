const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DiagnosticReportMediaSchema } = require('./allSchemaHeaders.js');
const { DiagnosticReportStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DiagnosticReportSchema } = require('./allSchemaHeaders.js');

DiagnosticReportSchema.add(DomainResourceSchema);
DiagnosticReportSchema.remove('id');
DiagnosticReportSchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  status: DiagnosticReportStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  effectiveDateTime: PrimitiveDateTimeSchema,
  effectivePeriod: PeriodSchema,
  issued: PrimitiveInstantSchema,
  performer: [ReferenceSchema],
  resultsInterpreter: [ReferenceSchema],
  specimen: [ReferenceSchema],
  result: [ReferenceSchema],
  imagingStudy: [ReferenceSchema],
  media: [DiagnosticReportMediaSchema],
  conclusion: PrimitiveStringSchema,
  conclusionCode: [CodeableConceptSchema],
  presentedForm: [AttachmentSchema],
});

module.exports.DiagnosticReportSchema = DiagnosticReportSchema;
