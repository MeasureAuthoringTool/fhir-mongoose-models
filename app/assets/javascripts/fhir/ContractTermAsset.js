const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetContextSchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetValuedItemSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferAnswerSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetSchema } = require('./allSchemaHeaders.js');

ContractTermAssetSchema.add(BackboneElementSchema);
ContractTermAssetSchema.remove('id');
ContractTermAssetSchema.add({
  scope: CodeableConceptSchema,
  type: [CodeableConceptSchema],
  typeReference: [ReferenceSchema],
  subtype: [CodeableConceptSchema],
  relationship: CodingSchema,
  context: [ContractTermAssetContextSchema],
  condition: PrimitiveStringSchema,
  periodType: [CodeableConceptSchema],
  period: [PeriodSchema],
  usePeriod: [PeriodSchema],
  text: PrimitiveStringSchema,
  linkId: [PrimitiveStringSchema],
  answer: [ContractTermOfferAnswerSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
  valuedItem: [ContractTermAssetValuedItemSchema],
});

module.exports.ContractTermAssetSchema = ContractTermAssetSchema;
