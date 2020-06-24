const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureGroupPopulationSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   description : String,
   criteria : ExpressionSchema,
   fhirTitle: { type: String, default: 'MeasureGroupPopulation' },
});

class MeasureGroupPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupPopulationSchema);
    this._type = 'FHIR::MeasureGroupPopulation';
  }
};


module.exports.MeasureGroupPopulationSchema = MeasureGroupPopulationSchema;
module.exports.MeasureGroupPopulation = MeasureGroupPopulation;
