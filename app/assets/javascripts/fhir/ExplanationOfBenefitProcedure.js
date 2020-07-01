const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitProcedureSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  type: [CodeableConceptSchema],
  date: PrimitiveDateTimeSchema,
  procedureCodeableConcept: CodeableConceptSchema,
  procedureReference: ReferenceSchema,
  udi: [ReferenceSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitProcedure' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitProcedure' },
});

class ExplanationOfBenefitProcedure extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitProcedureSchema);
    this.typeName = 'ExplanationOfBenefitProcedure';
    this._type = 'FHIR::ExplanationOfBenefitProcedure';
  }
}

module.exports.ExplanationOfBenefitProcedureSchema = ExplanationOfBenefitProcedureSchema;
module.exports.ExplanationOfBenefitProcedure = ExplanationOfBenefitProcedure;
