const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceVersionSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   component : IdentifierSchema,
   value : String,
   fhirTitle: { type: String, default: 'DeviceVersion' },
});

class DeviceVersion extends mongoose.Document {
  constructor(object) {
    super(object, DeviceVersionSchema);
    this._type = 'FHIR::DeviceVersion';
  }
};


module.exports.DeviceVersionSchema = DeviceVersionSchema;
module.exports.DeviceVersion = DeviceVersion;
