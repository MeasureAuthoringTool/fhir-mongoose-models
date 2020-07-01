const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DiagnosticReportMediaSchema } = require('./DiagnosticReportMedia');
const { DiagnosticReportStatusSchema } = require('./DiagnosticReportStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const DiagnosticReportSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'DiagnosticReport' },
  _type: { type: String, default: 'FHIR::DiagnosticReport' },
});

class DiagnosticReport extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportSchema);
    this.typeName = 'DiagnosticReport';
    this._type = 'FHIR::DiagnosticReport';
  }
}

module.exports.DiagnosticReportSchema = DiagnosticReportSchema;
module.exports.DiagnosticReport = DiagnosticReport;
