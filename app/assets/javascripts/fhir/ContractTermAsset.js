const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContractTermAssetContextSchema } = require('./ContractTermAssetContext');
const { ContractTermAssetValuedItemSchema } = require('./ContractTermAssetValuedItem');
const { ContractTermOfferAnswerSchema } = require('./ContractTermOfferAnswer');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const ContractTermAssetSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ContractTermAsset' },
  _type: { type: String, default: 'FHIR::ContractTermAsset' },
});

class ContractTermAsset extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetSchema);
    this.typeName = 'ContractTermAsset';
    this._type = 'FHIR::ContractTermAsset';
  }
}

module.exports.ContractTermAssetSchema = ContractTermAssetSchema;
module.exports.ContractTermAsset = ContractTermAsset;
