const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermOfferAnswerSchema } = require('./ContractTermOfferAnswer');
const { ContractTermOfferPartySchema } = require('./ContractTermOfferParty');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermOfferSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   party : [ContractTermOfferPartySchema],
   topic : ReferenceSchema,
   type : CodeableConceptSchema,
   decision : CodeableConceptSchema,
   decisionMode : [CodeableConceptSchema],
   answer : [ContractTermOfferAnswerSchema],
   text : String,
   linkId : [String],
   securityLabelNumber : [Number],
   fhirTitle: { type: String, default: 'ContractTermOffer' },
});

class ContractTermOffer extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermOfferSchema);
    this._type = 'FHIR::ContractTermOffer';
  }
};


module.exports.ContractTermOfferSchema = ContractTermOfferSchema;
module.exports.ContractTermOffer = ContractTermOffer;
