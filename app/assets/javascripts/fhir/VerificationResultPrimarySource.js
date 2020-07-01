const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const VerificationResultPrimarySourceSchema = BackboneElementSchemaFunction({
  who: ReferenceSchema,
  type: [CodeableConceptSchema],
  communicationMethod: [CodeableConceptSchema],
  validationStatus: CodeableConceptSchema,
  validationDate: PrimitiveDateTimeSchema,
  canPushUpdates: CodeableConceptSchema,
  pushTypeAvailable: [CodeableConceptSchema],
  typeName: { type: String, default: 'VerificationResultPrimarySource' },
  _type: { type: String, default: 'FHIR::VerificationResultPrimarySource' },
});

class VerificationResultPrimarySource extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultPrimarySourceSchema);
    this.typeName = 'VerificationResultPrimarySource';
    this._type = 'FHIR::VerificationResultPrimarySource';
  }
}

module.exports.VerificationResultPrimarySourceSchema = VerificationResultPrimarySourceSchema;
module.exports.VerificationResultPrimarySource = VerificationResultPrimarySource;
