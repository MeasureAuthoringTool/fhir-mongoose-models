const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { UDIEntryTypeSchema } = require('./allSchemaHeaders.js');
const { DeviceUdiCarrierSchema } = require('./allSchemaHeaders.js');

DeviceUdiCarrierSchema.add(BackboneElementSchema);
DeviceUdiCarrierSchema.remove('id');
DeviceUdiCarrierSchema.add({
  deviceIdentifier: PrimitiveStringSchema,
  issuer: PrimitiveUriSchema,
  jurisdiction: PrimitiveUriSchema,
  carrierAIDC: PrimitiveBase64BinarySchema,
  carrierHRF: PrimitiveStringSchema,
  entryType: UDIEntryTypeSchema,
});

module.exports.DeviceUdiCarrierSchema = DeviceUdiCarrierSchema;
