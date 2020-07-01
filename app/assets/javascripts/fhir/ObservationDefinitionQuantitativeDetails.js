const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const ObservationDefinitionQuantitativeDetailsSchema = BackboneElementSchemaFunction({
  customaryUnit: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  conversionFactor: PrimitiveDecimalSchema,
  decimalPrecision: PrimitiveIntegerSchema,
  typeName: { type: String, default: 'ObservationDefinitionQuantitativeDetails' },
  _type: { type: String, default: 'FHIR::ObservationDefinitionQuantitativeDetails' },
});

class ObservationDefinitionQuantitativeDetails extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionQuantitativeDetailsSchema);
    this.typeName = 'ObservationDefinitionQuantitativeDetails';
    this._type = 'FHIR::ObservationDefinitionQuantitativeDetails';
  }
}

module.exports.ObservationDefinitionQuantitativeDetailsSchema = ObservationDefinitionQuantitativeDetailsSchema;
module.exports.ObservationDefinitionQuantitativeDetails = ObservationDefinitionQuantitativeDetails;
