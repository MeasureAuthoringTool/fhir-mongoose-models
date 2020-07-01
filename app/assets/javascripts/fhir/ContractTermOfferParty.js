const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ContractTermOfferPartySchema = BackboneElementSchemaFunction({
  reference: [ReferenceSchema],
  role: CodeableConceptSchema,
  typeName: { type: String, default: 'ContractTermOfferParty' },
  _type: { type: String, default: 'FHIR::ContractTermOfferParty' },
});

class ContractTermOfferParty extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermOfferPartySchema);
    this.typeName = 'ContractTermOfferParty';
    this._type = 'FHIR::ContractTermOfferParty';
  }
}

module.exports.ContractTermOfferPartySchema = ContractTermOfferPartySchema;
module.exports.ContractTermOfferParty = ContractTermOfferParty;
