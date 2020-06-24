const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DiagnosticReportStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DiagnosticReportStatus' },
});

class DiagnosticReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportStatusSchema);
    this._type = 'FHIR::DiagnosticReportStatus';
  }
};


module.exports.DiagnosticReportStatusSchema = DiagnosticReportStatusSchema;
module.exports.DiagnosticReportStatus = DiagnosticReportStatus;
