const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const BiologicallyDerivedProductProcessingSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  procedure: CodeableConceptSchema,
  additive: ReferenceSchema,
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
  typeName: { type: String, default: 'BiologicallyDerivedProductProcessing' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductProcessing' },
});

class BiologicallyDerivedProductProcessing extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductProcessingSchema);
    this.typeName = 'BiologicallyDerivedProductProcessing';
    this._type = 'FHIR::BiologicallyDerivedProductProcessing';
  }
}

module.exports.BiologicallyDerivedProductProcessingSchema = BiologicallyDerivedProductProcessingSchema;
module.exports.BiologicallyDerivedProductProcessing = BiologicallyDerivedProductProcessing;
