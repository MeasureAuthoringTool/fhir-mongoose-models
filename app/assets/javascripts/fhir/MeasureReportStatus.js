const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MeasureReportStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MeasureReportStatus' },
  _type: { type: String, default: 'FHIR::MeasureReportStatus' },
});

class MeasureReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportStatusSchema);
    this.typeName = 'MeasureReportStatus';
    this._type = 'FHIR::MeasureReportStatus';
  }
}

module.exports.MeasureReportStatusSchema = MeasureReportStatusSchema;
module.exports.MeasureReportStatus = MeasureReportStatus;
