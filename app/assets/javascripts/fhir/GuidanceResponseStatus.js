const { ElementSchema } = require('./Element');
const { GuidanceResponseStatusSchema } = require('./allSchemaHeaders.js');

GuidanceResponseStatusSchema.add(ElementSchema);
GuidanceResponseStatusSchema.remove('id');
GuidanceResponseStatusSchema.add({
  value: String,
});

module.exports.GuidanceResponseStatusSchema = GuidanceResponseStatusSchema;
