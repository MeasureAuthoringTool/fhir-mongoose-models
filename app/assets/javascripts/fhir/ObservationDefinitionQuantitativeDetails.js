const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationDefinitionQuantitativeDetailsSchema = BackboneElementSchemaFunction({
   customaryUnit : CodeableConceptSchema,
   unit : CodeableConceptSchema,
   conversionFactor : Number,
   decimalPrecision : Number,
   fhirTitle: { type: String, default: 'ObservationDefinitionQuantitativeDetails' },
});

class ObservationDefinitionQuantitativeDetails extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionQuantitativeDetailsSchema);
    this._type = 'FHIR::ObservationDefinitionQuantitativeDetails';
  }
};


module.exports.ObservationDefinitionQuantitativeDetailsSchema = ObservationDefinitionQuantitativeDetailsSchema;
module.exports.ObservationDefinitionQuantitativeDetails = ObservationDefinitionQuantitativeDetails;
