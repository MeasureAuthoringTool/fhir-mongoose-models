const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { UDIEntryTypeSchema } = require('./UDIEntryType');

const DeviceUdiCarrierSchema = BackboneElementSchemaFunction({
  deviceIdentifier: PrimitiveStringSchema,
  issuer: PrimitiveUriSchema,
  jurisdiction: PrimitiveUriSchema,
  carrierAIDC: PrimitiveBase64BinarySchema,
  carrierHRF: PrimitiveStringSchema,
  entryType: UDIEntryTypeSchema,
  typeName: { type: String, default: 'DeviceUdiCarrier' },
  _type: { type: String, default: 'FHIR::DeviceUdiCarrier' },
});

class DeviceUdiCarrier extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUdiCarrierSchema);
    this.typeName = 'DeviceUdiCarrier';
    this._type = 'FHIR::DeviceUdiCarrier';
  }
}

module.exports.DeviceUdiCarrierSchema = DeviceUdiCarrierSchema;
module.exports.DeviceUdiCarrier = DeviceUdiCarrier;
