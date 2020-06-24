const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CoverageStatus' },
});

class CoverageStatus extends mongoose.Document {
  constructor(object) {
    super(object, CoverageStatusSchema);
    this._type = 'FHIR::CoverageStatus';
  }
};


module.exports.CoverageStatusSchema = CoverageStatusSchema;
module.exports.CoverageStatus = CoverageStatus;
