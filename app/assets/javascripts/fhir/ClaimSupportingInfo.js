const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimSupportingInfoSchema } = require('./allSchemaHeaders.js');

ClaimSupportingInfoSchema.add(BackboneElementSchema);
ClaimSupportingInfoSchema.remove('id');
ClaimSupportingInfoSchema.add({
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
  reason: CodeableConceptSchema,
});

module.exports.ClaimSupportingInfoSchema = ClaimSupportingInfoSchema;
