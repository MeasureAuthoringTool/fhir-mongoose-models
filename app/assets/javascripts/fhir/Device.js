const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DeviceDeviceNameSchema } = require('./allSchemaHeaders.js');
const { DevicePropertySchema } = require('./allSchemaHeaders.js');
const { DeviceSpecializationSchema } = require('./allSchemaHeaders.js');
const { DeviceUdiCarrierSchema } = require('./allSchemaHeaders.js');
const { DeviceVersionSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRDeviceStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DeviceSchema } = require('./allSchemaHeaders.js');

DeviceSchema.add(DomainResourceSchema);
DeviceSchema.remove('id');
DeviceSchema.add({
  identifier: [IdentifierSchema],
  definition: ReferenceSchema,
  udiCarrier: [DeviceUdiCarrierSchema],
  status: FHIRDeviceStatusSchema,
  statusReason: [CodeableConceptSchema],
  distinctIdentifier: PrimitiveStringSchema,
  manufacturer: PrimitiveStringSchema,
  manufactureDate: PrimitiveDateTimeSchema,
  expirationDate: PrimitiveDateTimeSchema,
  lotNumber: PrimitiveStringSchema,
  serialNumber: PrimitiveStringSchema,
  deviceName: [DeviceDeviceNameSchema],
  modelNumber: PrimitiveStringSchema,
  partNumber: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  specialization: [DeviceSpecializationSchema],
  version: [DeviceVersionSchema],
  property: [DevicePropertySchema],
  patient: ReferenceSchema,
  owner: ReferenceSchema,
  contact: [ContactPointSchema],
  location: ReferenceSchema,
  url: PrimitiveUriSchema,
  note: [AnnotationSchema],
  safety: [CodeableConceptSchema],
  parent: ReferenceSchema,
});

module.exports.DeviceSchema = DeviceSchema;
