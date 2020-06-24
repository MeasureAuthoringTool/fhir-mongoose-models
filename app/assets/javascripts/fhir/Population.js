const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PopulationSchema = BackboneElementSchemaFunction({
   ageRange : RangeSchema,
   ageCodeableConcept : CodeableConceptSchema,
   gender : CodeableConceptSchema,
   race : CodeableConceptSchema,
   physiologicalCondition : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'Population' },
});

class Population extends mongoose.Document {
  constructor(object) {
    super(object, PopulationSchema);
    this._type = 'FHIR::Population';
  }
};


module.exports.PopulationSchema = PopulationSchema;
module.exports.Population = Population;
