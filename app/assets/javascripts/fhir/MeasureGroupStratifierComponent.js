const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MeasureGroupStratifierComponentSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
  typeName: { type: String, default: 'MeasureGroupStratifierComponent' },
  _type: { type: String, default: 'FHIR::MeasureGroupStratifierComponent' },
});

class MeasureGroupStratifierComponent extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupStratifierComponentSchema);
    this.typeName = 'MeasureGroupStratifierComponent';
    this._type = 'FHIR::MeasureGroupStratifierComponent';
  }
}

module.exports.MeasureGroupStratifierComponentSchema = MeasureGroupStratifierComponentSchema;
module.exports.MeasureGroupStratifierComponent = MeasureGroupStratifierComponent;
