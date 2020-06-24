const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityRequestItemDiagnosisSchema } = require('./CoverageEligibilityRequestItemDiagnosis');
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

const CoverageEligibilityRequestItemSchema = BackboneElementSchemaFunction({
   supportingInfoSequence : [Number],
   category : CodeableConceptSchema,
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   provider : ReferenceSchema,
   quantity : SimpleQuantitySchema,
   unitPrice : MoneySchema,
   facility : ReferenceSchema,
   diagnosis : [CoverageEligibilityRequestItemDiagnosisSchema],
   detail : [ReferenceSchema],
   fhirTitle: { type: String, default: 'CoverageEligibilityRequestItem' },
});

class CoverageEligibilityRequestItem extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestItemSchema);
    this._type = 'FHIR::CoverageEligibilityRequestItem';
  }
};


module.exports.CoverageEligibilityRequestItemSchema = CoverageEligibilityRequestItemSchema;
module.exports.CoverageEligibilityRequestItem = CoverageEligibilityRequestItem;
