const { ElementSchema } = require('./Element');
const { LinkTypeSchema } = require('./allSchemaHeaders.js');

LinkTypeSchema.add(ElementSchema);
LinkTypeSchema.remove('id');
LinkTypeSchema.add({
  value: String,
});

module.exports.LinkTypeSchema = LinkTypeSchema;
