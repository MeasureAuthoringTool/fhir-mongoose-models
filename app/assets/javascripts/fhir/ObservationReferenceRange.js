const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ObservationReferenceRangeSchema = BackboneElementSchemaFunction({
  low: SimpleQuantitySchema,
  high: SimpleQuantitySchema,
  type: CodeableConceptSchema,
  appliesTo: [CodeableConceptSchema],
  age: RangeSchema,
  text: PrimitiveStringSchema,
  typeName: { type: String, default: 'ObservationReferenceRange' },
  _type: { type: String, default: 'FHIR::ObservationReferenceRange' },
});

class ObservationReferenceRange extends mongoose.Document {
  constructor(object) {
    super(object, ObservationReferenceRangeSchema);
    this.typeName = 'ObservationReferenceRange';
    this._type = 'FHIR::ObservationReferenceRange';
  }
}

module.exports.ObservationReferenceRangeSchema = ObservationReferenceRangeSchema;
module.exports.ObservationReferenceRange = ObservationReferenceRange;
