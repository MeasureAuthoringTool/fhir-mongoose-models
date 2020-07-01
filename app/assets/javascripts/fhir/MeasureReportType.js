const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MeasureReportTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MeasureReportType' },
  _type: { type: String, default: 'FHIR::MeasureReportType' },
});

class MeasureReportType extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportTypeSchema);
    this.typeName = 'MeasureReportType';
    this._type = 'FHIR::MeasureReportType';
  }
}

module.exports.MeasureReportTypeSchema = MeasureReportTypeSchema;
module.exports.MeasureReportType = MeasureReportType;
