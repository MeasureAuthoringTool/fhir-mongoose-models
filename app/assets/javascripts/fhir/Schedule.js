const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ScheduleSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  serviceCategory: [CodeableConceptSchema],
  serviceType: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  actor: [ReferenceSchema],
  planningHorizon: PeriodSchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'Schedule' },
  _type: { type: String, default: 'FHIR::Schedule' },
});

class Schedule extends mongoose.Document {
  constructor(object) {
    super(object, ScheduleSchema);
    this.typeName = 'Schedule';
    this._type = 'FHIR::Schedule';
  }
}

module.exports.ScheduleSchema = ScheduleSchema;
module.exports.Schedule = Schedule;
