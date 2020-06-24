const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimItemDetailSchema } = require('./ClaimItemDetail');
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

const ClaimItemSchema = BackboneElementSchemaFunction({
   sequence : Number,
   careTeamSequence : [Number],
   diagnosisSequence : [Number],
   procedureSequence : [Number],
   informationSequence : [Number],
   revenue : CodeableConceptSchema,
   category : CodeableConceptSchema,
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
   udi : [ReferenceSchema],
   bodySite : CodeableConceptSchema,
   subSite : [CodeableConceptSchema],
   encounter : [ReferenceSchema],
   detail : [ClaimItemDetailSchema],
   fhirTitle: { type: String, default: 'ClaimItem' },
});

class ClaimItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemSchema);
    this._type = 'FHIR::ClaimItem';
  }
};


module.exports.ClaimItemSchema = ClaimItemSchema;
module.exports.ClaimItem = ClaimItem;
