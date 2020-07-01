const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PractitionerRoleAvailableTimeSchema } = require('./PractitionerRoleAvailableTime');
const { PractitionerRoleNotAvailableSchema } = require('./PractitionerRoleNotAvailable');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const PractitionerRoleSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  period: PeriodSchema,
  practitioner: ReferenceSchema,
  organization: ReferenceSchema,
  code: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  location: [ReferenceSchema],
  healthcareService: [ReferenceSchema],
  telecom: [ContactPointSchema],
  availableTime: [PractitionerRoleAvailableTimeSchema],
  notAvailable: [PractitionerRoleNotAvailableSchema],
  availabilityExceptions: PrimitiveStringSchema,
  endpoint: [ReferenceSchema],
  typeName: { type: String, default: 'PractitionerRole' },
  _type: { type: String, default: 'FHIR::PractitionerRole' },
});

class PractitionerRole extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleSchema);
    this.typeName = 'PractitionerRole';
    this._type = 'FHIR::PractitionerRole';
  }
}

module.exports.PractitionerRoleSchema = PractitionerRoleSchema;
module.exports.PractitionerRole = PractitionerRole;
