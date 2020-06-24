const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MeasureReportStatus' },
});

class MeasureReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportStatusSchema);
    this._type = 'FHIR::MeasureReportStatus';
  }
};


module.exports.MeasureReportStatusSchema = MeasureReportStatusSchema;
module.exports.MeasureReportStatus = MeasureReportStatus;
