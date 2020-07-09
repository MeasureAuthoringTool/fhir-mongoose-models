const { ElementSchema } = require('./Element');
const { EpisodeOfCareStatusSchema } = require('./allSchemaHeaders.js');

EpisodeOfCareStatusSchema.add(ElementSchema);
EpisodeOfCareStatusSchema.remove('id');
EpisodeOfCareStatusSchema.add({
  value: String,
});

module.exports.EpisodeOfCareStatusSchema = EpisodeOfCareStatusSchema;
