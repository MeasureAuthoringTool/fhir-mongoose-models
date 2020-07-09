const { ElementSchema } = require('./Element');
const { XPathUsageTypeSchema } = require('./allSchemaHeaders.js');

XPathUsageTypeSchema.add(ElementSchema);
XPathUsageTypeSchema.remove('id');
XPathUsageTypeSchema.add({
  value: String,
});

module.exports.XPathUsageTypeSchema = XPathUsageTypeSchema;
