const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContractTermAssetContextSchema } = require('./ContractTermAssetContext');
const { ContractTermAssetValuedItemSchema } = require('./ContractTermAssetValuedItem');
const { ContractTermOfferAnswerSchema } = require('./ContractTermOfferAnswer');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermAssetSchema = BackboneElementSchemaFunction({
   scope : CodeableConceptSchema,
   type : [CodeableConceptSchema],
   typeReference : [ReferenceSchema],
   subtype : [CodeableConceptSchema],
   relationship : CodingSchema,
   context : [ContractTermAssetContextSchema],
   condition : String,
   periodType : [CodeableConceptSchema],
   period : [PeriodSchema],
   usePeriod : [PeriodSchema],
   text : String,
   linkId : [String],
   answer : [ContractTermOfferAnswerSchema],
   securityLabelNumber : [Number],
   valuedItem : [ContractTermAssetValuedItemSchema],
   fhirTitle: { type: String, default: 'ContractTermAsset' },
});

class ContractTermAsset extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetSchema);
    this._type = 'FHIR::ContractTermAsset';
  }
};


module.exports.ContractTermAssetSchema = ContractTermAssetSchema;
module.exports.ContractTermAsset = ContractTermAsset;
