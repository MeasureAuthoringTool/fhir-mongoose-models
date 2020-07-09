const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionCapabilitySchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionDeviceNameSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionMaterialSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionPropertySchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionSpecializationSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionUdiDeviceIdentifierSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ProdCharacteristicSchema } = require('./allSchemaHeaders.js');
const { ProductShelfLifeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionSchema } = require('./allSchemaHeaders.js');

DeviceDefinitionSchema.add(DomainResourceSchema);
DeviceDefinitionSchema.remove('id');
DeviceDefinitionSchema.add({
  identifier: [IdentifierSchema],
  udiDeviceIdentifier: [DeviceDefinitionUdiDeviceIdentifierSchema],
  manufacturerString: PrimitiveStringSchema,
  manufacturerReference: ReferenceSchema,
  deviceName: [DeviceDefinitionDeviceNameSchema],
  modelNumber: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  specialization: [DeviceDefinitionSpecializationSchema],
  version: [PrimitiveStringSchema],
  safety: [CodeableConceptSchema],
  shelfLifeStorage: [ProductShelfLifeSchema],
  physicalCharacteristics: ProdCharacteristicSchema,
  languageCode: [CodeableConceptSchema],
  capability: [DeviceDefinitionCapabilitySchema],
  property: [DeviceDefinitionPropertySchema],
  owner: ReferenceSchema,
  contact: [ContactPointSchema],
  url: PrimitiveUriSchema,
  onlineInformation: PrimitiveUriSchema,
  note: [AnnotationSchema],
  quantity: QuantitySchema,
  parentDevice: ReferenceSchema,
  material: [DeviceDefinitionMaterialSchema],
});

module.exports.DeviceDefinitionSchema = DeviceDefinitionSchema;
