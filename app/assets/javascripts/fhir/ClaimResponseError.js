const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');

const ClaimResponseErrorSchema = BackboneElementSchemaFunction({
  itemSequence: PrimitivePositiveIntSchema,
  detailSequence: PrimitivePositiveIntSchema,
  subDetailSequence: PrimitivePositiveIntSchema,
  code: CodeableConceptSchema,
  typeName: { type: String, default: 'ClaimResponseError' },
  _type: { type: String, default: 'FHIR::ClaimResponseError' },
});

class ClaimResponseError extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseErrorSchema);
    this.typeName = 'ClaimResponseError';
    this._type = 'FHIR::ClaimResponseError';
  }
}

module.exports.ClaimResponseErrorSchema = ClaimResponseErrorSchema;
module.exports.ClaimResponseError = ClaimResponseError;
