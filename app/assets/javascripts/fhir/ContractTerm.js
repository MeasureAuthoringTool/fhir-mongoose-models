const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContractTermActionSchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferSchema } = require('./allSchemaHeaders.js');
const { ContractTermSecurityLabelSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermSchema } = require('./allSchemaHeaders.js');

ContractTermSchema.add(BackboneElementSchema);
ContractTermSchema.remove('id');
ContractTermSchema.add({
  identifier: IdentifierSchema,
  issued: PrimitiveDateTimeSchema,
  applies: PeriodSchema,
  topicCodeableConcept: CodeableConceptSchema,
  topicReference: ReferenceSchema,
  type: CodeableConceptSchema,
  subType: CodeableConceptSchema,
  text: PrimitiveStringSchema,
  securityLabel: [ContractTermSecurityLabelSchema],
  offer: ContractTermOfferSchema,
  asset: [ContractTermAssetSchema],
  action: [ContractTermActionSchema],
  group: [ContractTermSchema],
});

module.exports.ContractTermSchema = ContractTermSchema;
