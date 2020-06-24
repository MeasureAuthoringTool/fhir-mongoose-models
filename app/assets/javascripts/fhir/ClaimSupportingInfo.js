const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimSupportingInfoSchema = BackboneElementSchemaFunction({
   sequence : Number,
   category : CodeableConceptSchema,
   code : CodeableConceptSchema,
   timingDate : FHIRDate,
   timingPeriod : PeriodSchema,
   valueBoolean : Boolean,
   valueString : String,
   valueQuantity : QuantitySchema,
   valueAttachment : AttachmentSchema,
   valueReference : ReferenceSchema,
   reason : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ClaimSupportingInfo' },
});

class ClaimSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, ClaimSupportingInfoSchema);
    this._type = 'FHIR::ClaimSupportingInfo';
  }
};


module.exports.ClaimSupportingInfoSchema = ClaimSupportingInfoSchema;
module.exports.ClaimSupportingInfo = ClaimSupportingInfo;
