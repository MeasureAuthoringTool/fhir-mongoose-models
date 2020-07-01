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
const { PatientCommunicationSchema } = require('./PatientCommunication');
const { PatientContactSchema } = require('./PatientContact');
const { PatientLinkSchema } = require('./PatientLink');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { ReferenceSchema } = require('./Reference');

const PatientSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  deceasedBoolean: PrimitiveBooleanSchema,
  deceasedDateTime: PrimitiveDateTimeSchema,
  address: [AddressSchema],
  maritalStatus: CodeableConceptSchema,
  multipleBirthBoolean: PrimitiveBooleanSchema,
  multipleBirthInteger: PrimitiveIntegerSchema,
  photo: [AttachmentSchema],
  contact: [PatientContactSchema],
  communication: [PatientCommunicationSchema],
  generalPractitioner: [ReferenceSchema],
  managingOrganization: ReferenceSchema,
  link: [PatientLinkSchema],
  typeName: { type: String, default: 'Patient' },
  _type: { type: String, default: 'FHIR::Patient' },
});

class Patient extends mongoose.Document {
  constructor(object) {
    super(object, PatientSchema);
    this.typeName = 'Patient';
    this._type = 'FHIR::Patient';
  }
}

module.exports.PatientSchema = PatientSchema;
module.exports.Patient = Patient;
