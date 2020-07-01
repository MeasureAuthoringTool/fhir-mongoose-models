const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DiagnosticReportStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DiagnosticReportStatus' },
  _type: { type: String, default: 'FHIR::DiagnosticReportStatus' },
});

class DiagnosticReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportStatusSchema);
    this.typeName = 'DiagnosticReportStatus';
    this._type = 'FHIR::DiagnosticReportStatus';
  }
}

module.exports.DiagnosticReportStatusSchema = DiagnosticReportStatusSchema;
module.exports.DiagnosticReportStatus = DiagnosticReportStatus;
