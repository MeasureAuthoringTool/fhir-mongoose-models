const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const ClaimResponseItemAdjudicationSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  reason: CodeableConceptSchema,
  amount: MoneySchema,
  value: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'ClaimResponseItemAdjudication' },
  _type: { type: String, default: 'FHIR::ClaimResponseItemAdjudication' },
});

class ClaimResponseItemAdjudication extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemAdjudicationSchema);
    this.typeName = 'ClaimResponseItemAdjudication';
    this._type = 'FHIR::ClaimResponseItemAdjudication';
  }
}

module.exports.ClaimResponseItemAdjudicationSchema = ClaimResponseItemAdjudicationSchema;
module.exports.ClaimResponseItemAdjudication = ClaimResponseItemAdjudication;
