const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { ChargeItemPerformerSchema } = require('./ChargeItemPerformer');
const { ChargeItemStatusSchema } = require('./ChargeItemStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');

const ChargeItemSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  definitionUri: [PrimitiveUriSchema],
  definitionCanonical: [PrimitiveCanonicalSchema],
  status: ChargeItemStatusSchema,
  partOf: [ReferenceSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  context: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  performer: [ChargeItemPerformerSchema],
  performingOrganization: ReferenceSchema,
  requestingOrganization: ReferenceSchema,
  costCenter: ReferenceSchema,
  quantity: QuantitySchema,
  bodysite: [CodeableConceptSchema],
  factorOverride: PrimitiveDecimalSchema,
  priceOverride: MoneySchema,
  overrideReason: PrimitiveStringSchema,
  enterer: ReferenceSchema,
  enteredDate: PrimitiveDateTimeSchema,
  reason: [CodeableConceptSchema],
  service: [ReferenceSchema],
  productReference: ReferenceSchema,
  productCodeableConcept: CodeableConceptSchema,
  account: [ReferenceSchema],
  note: [AnnotationSchema],
  supportingInformation: [ReferenceSchema],
  typeName: { type: String, default: 'ChargeItem' },
  _type: { type: String, default: 'FHIR::ChargeItem' },
});

class ChargeItem extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemSchema);
    this.typeName = 'ChargeItem';
    this._type = 'FHIR::ChargeItem';
  }
}

module.exports.ChargeItemSchema = ChargeItemSchema;
module.exports.ChargeItem = ChargeItem;
