const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MeasureReportType' },
});

class MeasureReportType extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportTypeSchema);
    this._type = 'FHIR::MeasureReportType';
  }
};


module.exports.MeasureReportTypeSchema = MeasureReportTypeSchema;
module.exports.MeasureReportType = MeasureReportType;
