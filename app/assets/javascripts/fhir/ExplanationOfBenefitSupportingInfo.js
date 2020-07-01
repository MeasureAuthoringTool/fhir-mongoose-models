const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitSupportingInfoSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  timingDate: PrimitiveDateSchema,
  timingPeriod: PeriodSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueString: PrimitiveStringSchema,
  valueQuantity: QuantitySchema,
  valueAttachment: AttachmentSchema,
  valueReference: ReferenceSchema,
  reason: CodingSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitSupportingInfo' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitSupportingInfo' },
});

class ExplanationOfBenefitSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitSupportingInfoSchema);
    this.typeName = 'ExplanationOfBenefitSupportingInfo';
    this._type = 'FHIR::ExplanationOfBenefitSupportingInfo';
  }
}

module.exports.ExplanationOfBenefitSupportingInfoSchema = ExplanationOfBenefitSupportingInfoSchema;
module.exports.ExplanationOfBenefitSupportingInfo = ExplanationOfBenefitSupportingInfo;
