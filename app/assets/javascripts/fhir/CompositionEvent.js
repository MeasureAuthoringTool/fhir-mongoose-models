const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const CompositionEventSchema = BackboneElementSchemaFunction({
  code: [CodeableConceptSchema],
  period: PeriodSchema,
  detail: [ReferenceSchema],
  typeName: { type: String, default: 'CompositionEvent' },
  _type: { type: String, default: 'FHIR::CompositionEvent' },
});

class CompositionEvent extends mongoose.Document {
  constructor(object) {
    super(object, CompositionEventSchema);
    this.typeName = 'CompositionEvent';
    this._type = 'FHIR::CompositionEvent';
  }
}

module.exports.CompositionEventSchema = CompositionEventSchema;
module.exports.CompositionEvent = CompositionEvent;
