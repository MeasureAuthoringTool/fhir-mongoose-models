const { ElementSchema } = require('./Element');
const { AdverseEventActualitySchema } = require('./allSchemaHeaders.js');

AdverseEventActualitySchema.add(ElementSchema);
AdverseEventActualitySchema.remove('id');
AdverseEventActualitySchema.add({
  value: String,
});

module.exports.AdverseEventActualitySchema = AdverseEventActualitySchema;
