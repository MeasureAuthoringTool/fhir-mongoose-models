const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ContractTermAssetValuedItemSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ContractTermAssetValuedItem' },
  _type: { type: String, default: 'FHIR::ContractTermAssetValuedItem' },
});

class ContractTermAssetValuedItem extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetValuedItemSchema);
    this.typeName = 'ContractTermAssetValuedItem';
    this._type = 'FHIR::ContractTermAssetValuedItem';
  }
}

module.exports.ContractTermAssetValuedItemSchema = ContractTermAssetValuedItemSchema;
module.exports.ContractTermAssetValuedItem = ContractTermAssetValuedItem;
