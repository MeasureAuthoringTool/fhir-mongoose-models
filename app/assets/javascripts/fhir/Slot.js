const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SlotStatusSchema } = require('./SlotStatus');

const SlotSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  serviceCategory: [CodeableConceptSchema],
  serviceType: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  appointmentType: CodeableConceptSchema,
  schedule: ReferenceSchema,
  status: SlotStatusSchema,
  start: PrimitiveInstantSchema,
  end: PrimitiveInstantSchema,
  overbooked: PrimitiveBooleanSchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'Slot' },
  _type: { type: String, default: 'FHIR::Slot' },
});

class Slot extends mongoose.Document {
  constructor(object) {
    super(object, SlotSchema);
    this.typeName = 'Slot';
    this._type = 'FHIR::Slot';
  }
}

module.exports.SlotSchema = SlotSchema;
module.exports.Slot = Slot;
