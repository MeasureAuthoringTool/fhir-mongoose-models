const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DevicePropertySchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   valueQuantity : [QuantitySchema],
   valueCode : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'DeviceProperty' },
});

class DeviceProperty extends mongoose.Document {
  constructor(object) {
    super(object, DevicePropertySchema);
    this._type = 'FHIR::DeviceProperty';
  }
};


module.exports.DevicePropertySchema = DevicePropertySchema;
module.exports.DeviceProperty = DeviceProperty;
