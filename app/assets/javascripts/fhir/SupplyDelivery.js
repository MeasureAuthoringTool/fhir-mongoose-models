const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SupplyDeliveryStatusSchema } = require('./SupplyDeliveryStatus');
const { SupplyDeliverySuppliedItemSchema } = require('./SupplyDeliverySuppliedItem');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SupplyDeliverySchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : SupplyDeliveryStatusSchema,
   patient : ReferenceSchema,
   type : CodeableConceptSchema,
   suppliedItem : SupplyDeliverySuppliedItemSchema,
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   supplier : ReferenceSchema,
   destination : ReferenceSchema,
   receiver : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SupplyDelivery' },
});

class SupplyDelivery extends mongoose.Document {
  constructor(object) {
    super(object, SupplyDeliverySchema);
    this._type = 'FHIR::SupplyDelivery';
  }
};


module.exports.SupplyDeliverySchema = SupplyDeliverySchema;
module.exports.SupplyDelivery = SupplyDelivery;
