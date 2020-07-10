const { ElementSchema } = require('./Element');
const { VisionStatusSchema } = require('./allSchemaHeaders.js');

VisionStatusSchema.add(ElementSchema);
VisionStatusSchema.remove('id');
VisionStatusSchema.add({
  value: String,
});

module.exports.VisionStatusSchema = VisionStatusSchema;
