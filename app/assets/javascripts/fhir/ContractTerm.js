const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermActionSchema } = require('./ContractTermAction');
const { ContractTermAssetSchema } = require('./ContractTermAsset');
const { ContractTermOfferSchema } = require('./ContractTermOffer');
const { ContractTermSecurityLabelSchema } = require('./ContractTermSecurityLabel');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   issued : DateTime,
   applies : PeriodSchema,
   topicCodeableConcept : CodeableConceptSchema,
   topicReference : ReferenceSchema,
   type : CodeableConceptSchema,
   subType : CodeableConceptSchema,
   text : String,
   securityLabel : [ContractTermSecurityLabelSchema],
   offer : ContractTermOfferSchema,
   asset : [ContractTermAssetSchema],
   action : [ContractTermActionSchema],
   group : [ContractTermSchema],
   fhirTitle: { type: String, default: 'ContractTerm' },
});

class ContractTerm extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermSchema);
    this._type = 'FHIR::ContractTerm';
  }
};


module.exports.ContractTermSchema = ContractTermSchema;
module.exports.ContractTerm = ContractTerm;
