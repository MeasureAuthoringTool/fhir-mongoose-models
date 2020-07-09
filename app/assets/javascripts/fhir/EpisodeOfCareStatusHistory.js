const { BackboneElementSchema } = require('./BackboneElement');
const { EpisodeOfCareStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { EpisodeOfCareStatusHistorySchema } = require('./allSchemaHeaders.js');

EpisodeOfCareStatusHistorySchema.add(BackboneElementSchema);
EpisodeOfCareStatusHistorySchema.remove('id');
EpisodeOfCareStatusHistorySchema.add({
  status: EpisodeOfCareStatusSchema,
  period: PeriodSchema,
});

module.exports.EpisodeOfCareStatusHistorySchema = EpisodeOfCareStatusHistorySchema;
