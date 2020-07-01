const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermOfferAnswerSchema } = require('./ContractTermOfferAnswer');
const { ContractTermOfferPartySchema } = require('./ContractTermOfferParty');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const ContractTermOfferSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  party: [ContractTermOfferPartySchema],
  topic: ReferenceSchema,
  type: CodeableConceptSchema,
  decision: CodeableConceptSchema,
  decisionMode: [CodeableConceptSchema],
  answer: [ContractTermOfferAnswerSchema],
  text: PrimitiveStringSchema,
  linkId: [PrimitiveStringSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
  typeName: { type: String, default: 'ContractTermOffer' },
  _type: { type: String, default: 'FHIR::ContractTermOffer' },
});

class ContractTermOffer extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermOfferSchema);
    this.typeName = 'ContractTermOffer';
    this._type = 'FHIR::ContractTermOffer';
  }
}

module.exports.ContractTermOfferSchema = ContractTermOfferSchema;
module.exports.ContractTermOffer = ContractTermOffer;
