const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermAssetValuedItemSchema = BackboneElementSchemaFunction({
   entityCodeableConcept : CodeableConceptSchema,
   entityReference : ReferenceSchema,
   identifier : IdentifierSchema,
   effectiveTime : DateTime,
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   points : Number,
   net : MoneySchema,
   payment : String,
   paymentDate : DateTime,
   responsible : ReferenceSchema,
   recipient : ReferenceSchema,
   linkId : [String],
   securityLabelNumber : [Number],
   fhirTitle: { type: String, default: 'ContractTermAssetValuedItem' },
});

class ContractTermAssetValuedItem extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetValuedItemSchema);
    this._type = 'FHIR::ContractTermAssetValuedItem';
  }
};


module.exports.ContractTermAssetValuedItemSchema = ContractTermAssetValuedItemSchema;
module.exports.ContractTermAssetValuedItem = ContractTermAssetValuedItem;
