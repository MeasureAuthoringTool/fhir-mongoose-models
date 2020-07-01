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
const { PractitionerQualificationSchema } = require('./PractitionerQualification');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');

const PractitionerSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  address: [AddressSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  photo: [AttachmentSchema],
  qualification: [PractitionerQualificationSchema],
  communication: [CodeableConceptSchema],
  typeName: { type: String, default: 'Practitioner' },
  _type: { type: String, default: 'FHIR::Practitioner' },
});

class Practitioner extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerSchema);
    this.typeName = 'Practitioner';
    this._type = 'FHIR::Practitioner';
  }
}

module.exports.PractitionerSchema = PractitionerSchema;
module.exports.Practitioner = Practitioner;
