const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { RequestPrioritySchema } = require('./RequestPriority');
const { SupplyRequestParameterSchema } = require('./SupplyRequestParameter');
const { SupplyRequestStatusSchema } = require('./SupplyRequestStatus');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SupplyRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : SupplyRequestStatusSchema,
   category : CodeableConceptSchema,
   priority : RequestPrioritySchema,
   itemCodeableConcept : CodeableConceptSchema,
   itemReference : ReferenceSchema,
   quantity : QuantitySchema,
   parameter : [SupplyRequestParameterSchema],
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   authoredOn : DateTime,
   requester : ReferenceSchema,
   supplier : [ReferenceSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   deliverFrom : ReferenceSchema,
   deliverTo : ReferenceSchema,
   fhirTitle: { type: String, default: 'SupplyRequest' },
});

class SupplyRequest extends mongoose.Document {
  constructor(object) {
    super(object, SupplyRequestSchema);
    this._type = 'FHIR::SupplyRequest';
  }
};


module.exports.SupplyRequestSchema = SupplyRequestSchema;
module.exports.SupplyRequest = SupplyRequest;
