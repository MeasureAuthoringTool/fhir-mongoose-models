const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { UDIEntryTypeSchema } = require('./UDIEntryType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceUdiCarrierSchema = BackboneElementSchemaFunction({
   deviceIdentifier : String,
   issuer : String,
   jurisdiction : String,
   carrierAIDC : String,
   carrierHRF : String,
   entryType : UDIEntryTypeSchema,
   fhirTitle: { type: String, default: 'DeviceUdiCarrier' },
});

class DeviceUdiCarrier extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUdiCarrierSchema);
    this._type = 'FHIR::DeviceUdiCarrier';
  }
};


module.exports.DeviceUdiCarrierSchema = DeviceUdiCarrierSchema;
module.exports.DeviceUdiCarrier = DeviceUdiCarrier;
