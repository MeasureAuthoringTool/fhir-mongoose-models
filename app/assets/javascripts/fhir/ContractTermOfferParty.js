const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermOfferPartySchema = BackboneElementSchemaFunction({
   reference : [ReferenceSchema],
   role : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ContractTermOfferParty' },
});

class ContractTermOfferParty extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermOfferPartySchema);
    this._type = 'FHIR::ContractTermOfferParty';
  }
};


module.exports.ContractTermOfferPartySchema = ContractTermOfferPartySchema;
module.exports.ContractTermOfferParty = ContractTermOfferParty;
