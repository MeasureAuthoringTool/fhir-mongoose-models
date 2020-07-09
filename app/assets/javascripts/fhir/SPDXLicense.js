const { ElementSchema } = require('./Element');
const { SPDXLicenseSchema } = require('./allSchemaHeaders.js');

SPDXLicenseSchema.add(ElementSchema);
SPDXLicenseSchema.remove('id');
SPDXLicenseSchema.add({
  value: String,
});

module.exports.SPDXLicenseSchema = SPDXLicenseSchema;
