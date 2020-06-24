const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { AttachmentSchema } = require('./Attachment');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { PersonLinkSchema } = require('./PersonLink');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PersonSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   name : [HumanNameSchema],
   telecom : [ContactPointSchema],
   gender : AdministrativeGenderSchema,
   birthDate : FHIRDate,
   address : [AddressSchema],
   photo : AttachmentSchema,
   managingOrganization : ReferenceSchema,
   active : Boolean,
   link : [PersonLinkSchema],
   fhirTitle: { type: String, default: 'Person' },
});

class Person extends mongoose.Document {
  constructor(object) {
    super(object, PersonSchema);
    this._type = 'FHIR::Person';
  }
};


module.exports.PersonSchema = PersonSchema;
module.exports.Person = Person;
