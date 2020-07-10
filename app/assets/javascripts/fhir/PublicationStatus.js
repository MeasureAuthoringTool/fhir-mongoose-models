const { ElementSchema } = require('./Element');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');

PublicationStatusSchema.add(ElementSchema);
PublicationStatusSchema.remove('id');
PublicationStatusSchema.add({
  value: String,
});

module.exports.PublicationStatusSchema = PublicationStatusSchema;
