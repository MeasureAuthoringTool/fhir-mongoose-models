const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CoverageStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CoverageStatus' },
  _type: { type: String, default: 'FHIR::CoverageStatus' },
});

class CoverageStatus extends mongoose.Document {
  constructor(object) {
    super(object, CoverageStatusSchema);
    this.typeName = 'CoverageStatus';
    this._type = 'FHIR::CoverageStatus';
  }
}

module.exports.CoverageStatusSchema = CoverageStatusSchema;
module.exports.CoverageStatus = CoverageStatus;
