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
const { IdentifierSchema } = require('./Identifier');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { ProductShelfLifeSchema } = require('./ProductShelfLife');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceDefinitionSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   udiDeviceIdentifier : [DeviceDefinitionUdiDeviceIdentifierSchema],
   manufacturerString : String,
   manufacturerReference : ReferenceSchema,
   deviceName : [DeviceDefinitionDeviceNameSchema],
   modelNumber : String,
   type : CodeableConceptSchema,
   specialization : [DeviceDefinitionSpecializationSchema],
   version : [String],
   safety : [CodeableConceptSchema],
   shelfLifeStorage : [ProductShelfLifeSchema],
   physicalCharacteristics : ProdCharacteristicSchema,
   languageCode : [CodeableConceptSchema],
   capability : [DeviceDefinitionCapabilitySchema],
   property : [DeviceDefinitionPropertySchema],
   owner : ReferenceSchema,
   contact : [ContactPointSchema],
   url : String,
   onlineInformation : String,
   note : [AnnotationSchema],
   quantity : QuantitySchema,
   parentDevice : ReferenceSchema,
   material : [DeviceDefinitionMaterialSchema],
   fhirTitle: { type: String, default: 'DeviceDefinition' },
});

class DeviceDefinition extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionSchema);
    this._type = 'FHIR::DeviceDefinition';
  }
};


module.exports.DeviceDefinitionSchema = DeviceDefinitionSchema;
module.exports.DeviceDefinition = DeviceDefinition;
