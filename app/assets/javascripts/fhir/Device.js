const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DeviceDeviceNameSchema } = require('./DeviceDeviceName');
const { DevicePropertySchema } = require('./DeviceProperty');
const { DeviceSpecializationSchema } = require('./DeviceSpecialization');
const { DeviceUdiCarrierSchema } = require('./DeviceUdiCarrier');
const { DeviceVersionSchema } = require('./DeviceVersion');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRDeviceStatusSchema } = require('./FHIRDeviceStatus');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   definition : ReferenceSchema,
   udiCarrier : [DeviceUdiCarrierSchema],
   status : FHIRDeviceStatusSchema,
   statusReason : [CodeableConceptSchema],
   distinctIdentifier : String,
   manufacturer : String,
   manufactureDate : DateTime,
   expirationDate : DateTime,
   lotNumber : String,
   serialNumber : String,
   deviceName : [DeviceDeviceNameSchema],
   modelNumber : String,
   partNumber : String,
   type : CodeableConceptSchema,
   specialization : [DeviceSpecializationSchema],
   version : [DeviceVersionSchema],
   property : [DevicePropertySchema],
   patient : ReferenceSchema,
   owner : ReferenceSchema,
   contact : [ContactPointSchema],
   location : ReferenceSchema,
   url : String,
   note : [AnnotationSchema],
   safety : [CodeableConceptSchema],
   parent : ReferenceSchema,
   fhirTitle: { type: String, default: 'Device' },
});

class Device extends mongoose.Document {
  constructor(object) {
    super(object, DeviceSchema);
    this._type = 'FHIR::Device';
  }
};


module.exports.DeviceSchema = DeviceSchema;
module.exports.Device = Device;
