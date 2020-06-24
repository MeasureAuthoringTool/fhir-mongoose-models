const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { ChargeItemPerformerSchema } = require('./ChargeItemPerformer');
const { ChargeItemStatusSchema } = require('./ChargeItemStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   definitionUri : [String],
   definitionCanonical : [String],
   status : ChargeItemStatusSchema,
   partOf : [ReferenceSchema],
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   context : ReferenceSchema,
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   performer : [ChargeItemPerformerSchema],
   performingOrganization : ReferenceSchema,
   requestingOrganization : ReferenceSchema,
   costCenter : ReferenceSchema,
   quantity : QuantitySchema,
   bodysite : [CodeableConceptSchema],
   factorOverride : Number,
   priceOverride : MoneySchema,
   overrideReason : String,
   enterer : ReferenceSchema,
   enteredDate : DateTime,
   reason : [CodeableConceptSchema],
   service : [ReferenceSchema],
   productReference : ReferenceSchema,
   productCodeableConcept : CodeableConceptSchema,
   account : [ReferenceSchema],
   note : [AnnotationSchema],
   supportingInformation : [ReferenceSchema],
   fhirTitle: { type: String, default: 'ChargeItem' },
});

class ChargeItem extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemSchema);
    this._type = 'FHIR::ChargeItem';
  }
};


module.exports.ChargeItemSchema = ChargeItemSchema;
module.exports.ChargeItem = ChargeItem;
