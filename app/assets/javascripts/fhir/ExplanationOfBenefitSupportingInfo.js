const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitSupportingInfoSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitSupportingInfoSchema.add(BackboneElementSchema);
ExplanationOfBenefitSupportingInfoSchema.remove('id');
ExplanationOfBenefitSupportingInfoSchema.add({
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
});

module.exports.ExplanationOfBenefitSupportingInfoSchema = ExplanationOfBenefitSupportingInfoSchema;
