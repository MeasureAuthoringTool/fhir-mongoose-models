const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSchema } = require('./ClaimResponseAddItemDetail');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseAddItemSchema = BackboneElementSchemaFunction({
   itemSequence : [Number],
   detailSequence : [Number],
   subdetailSequence : [Number],
   provider : [ReferenceSchema],
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   programCode : [CodeableConceptSchema],
   servicedDate : FHIRDate,
   servicedPeriod : PeriodSchema,
   locationCodeableConcept : CodeableConceptSchema,
   locationAddress : AddressSchema,
   locationReference : ReferenceSchema,
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   factor : Number,
   net : MoneySchema,
   bodySite : CodeableConceptSchema,
   subSite : [CodeableConceptSchema],
   noteNumber : [Number],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   detail : [ClaimResponseAddItemDetailSchema],
   fhirTitle: { type: String, default: 'ClaimResponseAddItem' },
});

class ClaimResponseAddItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemSchema);
    this._type = 'FHIR::ClaimResponseAddItem';
  }
};


module.exports.ClaimResponseAddItemSchema = ClaimResponseAddItemSchema;
module.exports.ClaimResponseAddItem = ClaimResponseAddItem;
