const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { EpisodeOfCareStatusSchema } = require('./EpisodeOfCareStatus');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EpisodeOfCareStatusHistorySchema = BackboneElementSchemaFunction({
   status : EpisodeOfCareStatusSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'EpisodeOfCareStatusHistory' },
});

class EpisodeOfCareStatusHistory extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareStatusHistorySchema);
    this._type = 'FHIR::EpisodeOfCareStatusHistory';
  }
};


module.exports.EpisodeOfCareStatusHistorySchema = EpisodeOfCareStatusHistorySchema;
module.exports.EpisodeOfCareStatusHistory = EpisodeOfCareStatusHistory;
