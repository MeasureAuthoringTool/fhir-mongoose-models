const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { RequestPrioritySchema } = require('./RequestPriority');
const { SupplyRequestParameterSchema } = require('./SupplyRequestParameter');
const { SupplyRequestStatusSchema } = require('./SupplyRequestStatus');
const { TimingSchema } = require('./Timing');

const SupplyRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: SupplyRequestStatusSchema,
  category: CodeableConceptSchema,
  priority: RequestPrioritySchema,
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  quantity: QuantitySchema,
  parameter: [SupplyRequestParameterSchema],
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  supplier: [ReferenceSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  deliverFrom: ReferenceSchema,
  deliverTo: ReferenceSchema,
  typeName: { type: String, default: 'SupplyRequest' },
  _type: { type: String, default: 'FHIR::SupplyRequest' },
});

class SupplyRequest extends mongoose.Document {
  constructor(object) {
    super(object, SupplyRequestSchema);
    this.typeName = 'SupplyRequest';
    this._type = 'FHIR::SupplyRequest';
  }
}

module.exports.SupplyRequestSchema = SupplyRequestSchema;
module.exports.SupplyRequest = SupplyRequest;
