const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const SpecimenProcessingSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  procedure: CodeableConceptSchema,
  additive: [ReferenceSchema],
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
  typeName: { type: String, default: 'SpecimenProcessing' },
  _type: { type: String, default: 'FHIR::SpecimenProcessing' },
});

class SpecimenProcessing extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenProcessingSchema);
    this.typeName = 'SpecimenProcessing';
    this._type = 'FHIR::SpecimenProcessing';
  }
}

module.exports.SpecimenProcessingSchema = SpecimenProcessingSchema;
module.exports.SpecimenProcessing = SpecimenProcessing;
