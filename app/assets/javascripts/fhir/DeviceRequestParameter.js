const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceRequestParameterSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueQuantity : QuantitySchema,
   valueRange : RangeSchema,
   valueBoolean : Boolean,
   fhirTitle: { type: String, default: 'DeviceRequestParameter' },
});

class DeviceRequestParameter extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestParameterSchema);
    this._type = 'FHIR::DeviceRequestParameter';
  }
};


module.exports.DeviceRequestParameterSchema = DeviceRequestParameterSchema;
module.exports.DeviceRequestParameter = DeviceRequestParameter;
