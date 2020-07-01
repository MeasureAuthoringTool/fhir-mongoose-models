const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CareTeamStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CareTeamStatus' },
  _type: { type: String, default: 'FHIR::CareTeamStatus' },
});

class CareTeamStatus extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamStatusSchema);
    this.typeName = 'CareTeamStatus';
    this._type = 'FHIR::CareTeamStatus';
  }
}

module.exports.CareTeamStatusSchema = CareTeamStatusSchema;
module.exports.CareTeamStatus = CareTeamStatus;
