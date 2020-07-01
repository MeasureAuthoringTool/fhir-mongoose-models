const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { EpisodeOfCareStatusSchema } = require('./EpisodeOfCareStatus');
const { PeriodSchema } = require('./Period');

const EpisodeOfCareStatusHistorySchema = BackboneElementSchemaFunction({
  status: EpisodeOfCareStatusSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'EpisodeOfCareStatusHistory' },
  _type: { type: String, default: 'FHIR::EpisodeOfCareStatusHistory' },
});

class EpisodeOfCareStatusHistory extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareStatusHistorySchema);
    this.typeName = 'EpisodeOfCareStatusHistory';
    this._type = 'FHIR::EpisodeOfCareStatusHistory';
  }
}

module.exports.EpisodeOfCareStatusHistorySchema = EpisodeOfCareStatusHistorySchema;
module.exports.EpisodeOfCareStatusHistory = EpisodeOfCareStatusHistory;
