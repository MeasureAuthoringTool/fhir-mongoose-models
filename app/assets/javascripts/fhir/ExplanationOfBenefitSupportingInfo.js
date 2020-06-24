const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
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

const ExplanationOfBenefitSupportingInfoSchema = BackboneElementSchemaFunction({
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
   reason : CodingSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitSupportingInfo' },
});

class ExplanationOfBenefitSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitSupportingInfoSchema);
    this._type = 'FHIR::ExplanationOfBenefitSupportingInfo';
  }
};


module.exports.ExplanationOfBenefitSupportingInfoSchema = ExplanationOfBenefitSupportingInfoSchema;
module.exports.ExplanationOfBenefitSupportingInfo = ExplanationOfBenefitSupportingInfo;
