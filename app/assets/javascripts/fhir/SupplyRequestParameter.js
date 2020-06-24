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

const SupplyRequestParameterSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueQuantity : QuantitySchema,
   valueRange : RangeSchema,
   valueBoolean : Boolean,
   fhirTitle: { type: String, default: 'SupplyRequestParameter' },
});

class SupplyRequestParameter extends mongoose.Document {
  constructor(object) {
    super(object, SupplyRequestParameterSchema);
    this._type = 'FHIR::SupplyRequestParameter';
  }
};


module.exports.SupplyRequestParameterSchema = SupplyRequestParameterSchema;
module.exports.SupplyRequestParameter = SupplyRequestParameter;
