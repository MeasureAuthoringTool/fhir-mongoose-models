const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermActionSchema } = require('./ContractTermAction');
const { ContractTermAssetSchema } = require('./ContractTermAsset');
const { ContractTermOfferSchema } = require('./ContractTermOffer');
const { ContractTermSecurityLabelSchema } = require('./ContractTermSecurityLabel');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ContractTermSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ContractTerm' },
  _type: { type: String, default: 'FHIR::ContractTerm' },
});

class ContractTerm extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermSchema);
    this.typeName = 'ContractTerm';
    this._type = 'FHIR::ContractTerm';
  }
}

module.exports.ContractTermSchema = ContractTermSchema;
module.exports.ContractTerm = ContractTerm;
