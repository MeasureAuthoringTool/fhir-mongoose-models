const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');
const { RelatedPersonCommunicationSchema } = require('./RelatedPersonCommunication');

const RelatedPersonSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  patient: ReferenceSchema,
  relationship: [CodeableConceptSchema],
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  address: [AddressSchema],
  photo: [AttachmentSchema],
  period: PeriodSchema,
  communication: [RelatedPersonCommunicationSchema],
  typeName: { type: String, default: 'RelatedPerson' },
  _type: { type: String, default: 'FHIR::RelatedPerson' },
});

class RelatedPerson extends mongoose.Document {
  constructor(object) {
    super(object, RelatedPersonSchema);
    this.typeName = 'RelatedPerson';
    this._type = 'FHIR::RelatedPerson';
  }
}

module.exports.RelatedPersonSchema = RelatedPersonSchema;
module.exports.RelatedPerson = RelatedPerson;
