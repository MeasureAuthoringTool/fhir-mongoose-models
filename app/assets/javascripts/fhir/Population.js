const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RangeSchema } = require('./Range');

const PopulationSchema = BackboneElementSchemaFunction({
  ageRange: RangeSchema,
  ageCodeableConcept: CodeableConceptSchema,
  gender: CodeableConceptSchema,
  race: CodeableConceptSchema,
  physiologicalCondition: CodeableConceptSchema,
  typeName: { type: String, default: 'Population' },
  _type: { type: String, default: 'FHIR::Population' },
});

class Population extends mongoose.Document {
  constructor(object) {
    super(object, PopulationSchema);
    this.typeName = 'Population';
    this._type = 'FHIR::Population';
  }
}

module.exports.PopulationSchema = PopulationSchema;
module.exports.Population = Population;
