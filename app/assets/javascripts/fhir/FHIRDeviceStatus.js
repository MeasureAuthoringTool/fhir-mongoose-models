const { ElementSchema } = require('./Element');
const { FHIRDeviceStatusSchema } = require('./allSchemaHeaders.js');

FHIRDeviceStatusSchema.add(ElementSchema);
FHIRDeviceStatusSchema.remove('id');
FHIRDeviceStatusSchema.add({
  value: String,
});

module.exports.FHIRDeviceStatusSchema = FHIRDeviceStatusSchema;
