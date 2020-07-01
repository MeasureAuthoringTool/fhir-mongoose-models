const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DeviceDeviceNameSchema } = require('./DeviceDeviceName');
const { DevicePropertySchema } = require('./DeviceProperty');
const { DeviceSpecializationSchema } = require('./DeviceSpecialization');
const { DeviceUdiCarrierSchema } = require('./DeviceUdiCarrier');
const { DeviceVersionSchema } = require('./DeviceVersion');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FHIRDeviceStatusSchema } = require('./FHIRDeviceStatus');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const DeviceSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Device' },
  _type: { type: String, default: 'FHIR::Device' },
});

class Device extends mongoose.Document {
  constructor(object) {
    super(object, DeviceSchema);
    this.typeName = 'Device';
    this._type = 'FHIR::Device';
  }
}

module.exports.DeviceSchema = DeviceSchema;
module.exports.Device = Device;
