const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DeviceDefinitionCapabilitySchema } = require('./DeviceDefinitionCapability');
const { DeviceDefinitionDeviceNameSchema } = require('./DeviceDefinitionDeviceName');
const { DeviceDefinitionMaterialSchema } = require('./DeviceDefinitionMaterial');
const { DeviceDefinitionPropertySchema } = require('./DeviceDefinitionProperty');
const { DeviceDefinitionSpecializationSchema } = require('./DeviceDefinitionSpecialization');
const { DeviceDefinitionUdiDeviceIdentifierSchema } = require('./DeviceDefinitionUdiDeviceIdentifier');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { ProductShelfLifeSchema } = require('./ProductShelfLife');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const DeviceDefinitionSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'DeviceDefinition' },
  _type: { type: String, default: 'FHIR::DeviceDefinition' },
});

class DeviceDefinition extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionSchema);
    this.typeName = 'DeviceDefinition';
    this._type = 'FHIR::DeviceDefinition';
  }
}

module.exports.DeviceDefinitionSchema = DeviceDefinitionSchema;
module.exports.DeviceDefinition = DeviceDefinition;
