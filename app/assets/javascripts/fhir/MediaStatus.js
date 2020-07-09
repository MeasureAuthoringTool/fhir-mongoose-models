const { ElementSchema } = require('./Element');
const { MediaStatusSchema } = require('./allSchemaHeaders.js');

MediaStatusSchema.add(ElementSchema);
MediaStatusSchema.remove('id');
MediaStatusSchema.add({
  value: String,
});

module.exports.MediaStatusSchema = MediaStatusSchema;
