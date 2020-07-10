const { ElementSchema } = require('./Element');
const { DeviceUseStatementStatusSchema } = require('./allSchemaHeaders.js');

DeviceUseStatementStatusSchema.add(ElementSchema);
DeviceUseStatementStatusSchema.remove('id');
DeviceUseStatementStatusSchema.add({
  value: String,
});

module.exports.DeviceUseStatementStatusSchema = DeviceUseStatementStatusSchema;
