const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureGroupPopulationSchema } = require('./MeasureGroupPopulation');
const { MeasureGroupStratifierSchema } = require('./MeasureGroupStratifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MeasureGroupSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  population: [MeasureGroupPopulationSchema],
  stratifier: [MeasureGroupStratifierSchema],
  typeName: { type: String, default: 'MeasureGroup' },
  _type: { type: String, default: 'FHIR::MeasureGroup' },
});

class MeasureGroup extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupSchema);
    this.typeName = 'MeasureGroup';
    this._type = 'FHIR::MeasureGroup';
  }
}

module.exports.MeasureGroupSchema = MeasureGroupSchema;
module.exports.MeasureGroup = MeasureGroup;
