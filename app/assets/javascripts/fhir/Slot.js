const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { SlotStatusSchema } = require('./SlotStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SlotSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   serviceCategory : [CodeableConceptSchema],
   serviceType : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   appointmentType : CodeableConceptSchema,
   schedule : ReferenceSchema,
   status : SlotStatusSchema,
   start : DateTime,
   end : DateTime,
   overbooked : Boolean,
   comment : String,
   fhirTitle: { type: String, default: 'Slot' },
});

class Slot extends mongoose.Document {
  constructor(object) {
    super(object, SlotSchema);
    this._type = 'FHIR::Slot';
  }
};


module.exports.SlotSchema = SlotSchema;
module.exports.Slot = Slot;
