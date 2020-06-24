const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./HumanName');
const { IdentifierSchema } = require('./Identifier');
const { PatientCommunicationSchema } = require('./PatientCommunication');
const { PatientContactSchema } = require('./PatientContact');
const { PatientLinkSchema } = require('./PatientLink');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PatientSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   name : [HumanNameSchema],
   telecom : [ContactPointSchema],
   gender : AdministrativeGenderSchema,
   birthDate : FHIRDate,
   deceasedBoolean : Boolean,
   deceasedDateTime : DateTime,
   address : [AddressSchema],
   maritalStatus : CodeableConceptSchema,
   multipleBirthBoolean : Boolean,
   multipleBirthInteger : Number,
   photo : [AttachmentSchema],
   contact : [PatientContactSchema],
   communication : [PatientCommunicationSchema],
   generalPractitioner : [ReferenceSchema],
   managingOrganization : ReferenceSchema,
   link : [PatientLinkSchema],
   fhirTitle: { type: String, default: 'Patient' },
});

class Patient extends mongoose.Document {
  constructor(object) {
    super(object, PatientSchema);
    this._type = 'FHIR::Patient';
  }
};


module.exports.PatientSchema = PatientSchema;
module.exports.Patient = Patient;
