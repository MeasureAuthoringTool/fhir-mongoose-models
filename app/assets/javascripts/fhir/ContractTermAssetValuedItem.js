const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetValuedItemSchema } = require('./allSchemaHeaders.js');

ContractTermAssetValuedItemSchema.add(BackboneElementSchema);
ContractTermAssetValuedItemSchema.remove('id');
ContractTermAssetValuedItemSchema.add({
  entityCodeableConcept: CodeableConceptSchema,
  entityReference: ReferenceSchema,
  identifier: IdentifierSchema,
  effectiveTime: PrimitiveDateTimeSchema,
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  points: PrimitiveDecimalSchema,
  net: MoneySchema,
  payment: PrimitiveStringSchema,
  paymentDate: PrimitiveDateTimeSchema,
  responsible: ReferenceSchema,
  recipient: ReferenceSchema,
  linkId: [PrimitiveStringSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
});

module.exports.ContractTermAssetValuedItemSchema = ContractTermAssetValuedItemSchema;
