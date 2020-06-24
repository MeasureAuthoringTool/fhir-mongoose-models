const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { PractitionerQualificationSchema } = require('./PractitionerQualification');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PractitionerSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   name : [HumanNameSchema],
   telecom : [ContactPointSchema],
   address : [AddressSchema],
   gender : AdministrativeGenderSchema,
   birthDate : FHIRDate,
   photo : [AttachmentSchema],
   qualification : [PractitionerQualificationSchema],
   communication : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'Practitioner' },
});

class Practitioner extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerSchema);
    this._type = 'FHIR::Practitioner';
  }
};


module.exports.PractitionerSchema = PractitionerSchema;
module.exports.Practitioner = Practitioner;
