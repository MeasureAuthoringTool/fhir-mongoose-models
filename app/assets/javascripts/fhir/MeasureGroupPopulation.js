const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MeasureGroupPopulationSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
  typeName: { type: String, default: 'MeasureGroupPopulation' },
  _type: { type: String, default: 'FHIR::MeasureGroupPopulation' },
});

class MeasureGroupPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupPopulationSchema);
    this.typeName = 'MeasureGroupPopulation';
    this._type = 'FHIR::MeasureGroupPopulation';
  }
}

module.exports.MeasureGroupPopulationSchema = MeasureGroupPopulationSchema;
module.exports.MeasureGroupPopulation = MeasureGroupPopulation;
