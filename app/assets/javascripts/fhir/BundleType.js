const { ElementSchema } = require('./Element');
const { BundleTypeSchema } = require('./allSchemaHeaders.js');

BundleTypeSchema.add(ElementSchema);
BundleTypeSchema.remove('id');
BundleTypeSchema.add({
  value: String,
});

module.exports.BundleTypeSchema = BundleTypeSchema;
