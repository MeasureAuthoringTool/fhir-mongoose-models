const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { MeasureGroupStratifierComponentSchema } = require('./MeasureGroupStratifierComponent');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MeasureGroupStratifierSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
  component: [MeasureGroupStratifierComponentSchema],
  typeName: { type: String, default: 'MeasureGroupStratifier' },
  _type: { type: String, default: 'FHIR::MeasureGroupStratifier' },
});

class MeasureGroupStratifier extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupStratifierSchema);
    this.typeName = 'MeasureGroupStratifier';
    this._type = 'FHIR::MeasureGroupStratifier';
  }
}

module.exports.MeasureGroupStratifierSchema = MeasureGroupStratifierSchema;
module.exports.MeasureGroupStratifier = MeasureGroupStratifier;
