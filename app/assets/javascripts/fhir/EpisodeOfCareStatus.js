const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EpisodeOfCareStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EpisodeOfCareStatus' },
  _type: { type: String, default: 'FHIR::EpisodeOfCareStatus' },
});

class EpisodeOfCareStatus extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareStatusSchema);
    this.typeName = 'EpisodeOfCareStatus';
    this._type = 'FHIR::EpisodeOfCareStatus';
  }
}

module.exports.EpisodeOfCareStatusSchema = EpisodeOfCareStatusSchema;
module.exports.EpisodeOfCareStatus = EpisodeOfCareStatus;
