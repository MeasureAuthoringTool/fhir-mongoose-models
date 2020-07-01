const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { SupplyDeliveryStatusSchema } = require('./SupplyDeliveryStatus');
const { SupplyDeliverySuppliedItemSchema } = require('./SupplyDeliverySuppliedItem');
const { TimingSchema } = require('./Timing');

const SupplyDeliverySchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: SupplyDeliveryStatusSchema,
  patient: ReferenceSchema,
  type: CodeableConceptSchema,
  suppliedItem: SupplyDeliverySuppliedItemSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  supplier: ReferenceSchema,
  destination: ReferenceSchema,
  receiver: [ReferenceSchema],
  typeName: { type: String, default: 'SupplyDelivery' },
  _type: { type: String, default: 'FHIR::SupplyDelivery' },
});

class SupplyDelivery extends mongoose.Document {
  constructor(object) {
    super(object, SupplyDeliverySchema);
    this.typeName = 'SupplyDelivery';
    this._type = 'FHIR::SupplyDelivery';
  }
}

module.exports.SupplyDeliverySchema = SupplyDeliverySchema;
module.exports.SupplyDelivery = SupplyDelivery;
