const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FamilyHistoryStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FamilyHistoryStatus' },
  _type: { type: String, default: 'FHIR::FamilyHistoryStatus' },
});

class FamilyHistoryStatus extends mongoose.Document {
  constructor(object) {
    super(object, FamilyHistoryStatusSchema);
    this.typeName = 'FamilyHistoryStatus';
    this._type = 'FHIR::FamilyHistoryStatus';
  }
}

module.exports.FamilyHistoryStatusSchema = FamilyHistoryStatusSchema;
module.exports.FamilyHistoryStatus = FamilyHistoryStatus;
