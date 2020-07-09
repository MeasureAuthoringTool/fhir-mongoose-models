const { ElementSchema } = require('./Element');
const { VisionEyesSchema } = require('./allSchemaHeaders.js');

VisionEyesSchema.add(ElementSchema);
VisionEyesSchema.remove('id');
VisionEyesSchema.add({
  value: String,
});

module.exports.VisionEyesSchema = VisionEyesSchema;
