const { ElementSchema } = require('./Element');
const { VisionBaseSchema } = require('./allSchemaHeaders.js');

VisionBaseSchema.add(ElementSchema);
VisionBaseSchema.remove('id');
VisionBaseSchema.add({
  value: String,
});

module.exports.VisionBaseSchema = VisionBaseSchema;
