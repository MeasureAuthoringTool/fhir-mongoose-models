const mongoose = require('mongoose/browser');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ObservationRangeCategorySchema } = require('./ObservationRangeCategory');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');

const ObservationDefinitionQualifiedIntervalSchema = BackboneElementSchemaFunction({
  category: ObservationRangeCategorySchema,
  range: RangeSchema,
  context: CodeableConceptSchema,
  appliesTo: [CodeableConceptSchema],
  gender: AdministrativeGenderSchema,
  age: RangeSchema,
  gestationalAge: RangeSchema,
  condition: PrimitiveStringSchema,
  typeName: { type: String, default: 'ObservationDefinitionQualifiedInterval' },
  _type: { type: String, default: 'FHIR::ObservationDefinitionQualifiedInterval' },
});

class ObservationDefinitionQualifiedInterval extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDefinitionQualifiedIntervalSchema);
    this.typeName = 'ObservationDefinitionQualifiedInterval';
    this._type = 'FHIR::ObservationDefinitionQualifiedInterval';
  }
}

module.exports.ObservationDefinitionQualifiedIntervalSchema = ObservationDefinitionQualifiedIntervalSchema;
module.exports.ObservationDefinitionQualifiedInterval = ObservationDefinitionQualifiedInterval;
