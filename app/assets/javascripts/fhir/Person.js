const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { AttachmentSchema } = require('./Attachment');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { PersonLinkSchema } = require('./PersonLink');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');

const PersonSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  address: [AddressSchema],
  photo: AttachmentSchema,
  managingOrganization: ReferenceSchema,
  active: PrimitiveBooleanSchema,
  link: [PersonLinkSchema],
  typeName: { type: String, default: 'Person' },
  _type: { type: String, default: 'FHIR::Person' },
});

class Person extends mongoose.Document {
  constructor(object) {
    super(object, PersonSchema);
    this.typeName = 'Person';
    this._type = 'FHIR::Person';
  }
}

module.exports.PersonSchema = PersonSchema;
module.exports.Person = Person;
