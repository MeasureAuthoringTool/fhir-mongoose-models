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
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RelatedPersonCommunicationSchema } = require('./RelatedPersonCommunication');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RelatedPersonSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   patient : ReferenceSchema,
   relationship : [CodeableConceptSchema],
   name : [HumanNameSchema],
   telecom : [ContactPointSchema],
   gender : AdministrativeGenderSchema,
   birthDate : FHIRDate,
   address : [AddressSchema],
   photo : [AttachmentSchema],
   period : PeriodSchema,
   communication : [RelatedPersonCommunicationSchema],
   fhirTitle: { type: String, default: 'RelatedPerson' },
});

class RelatedPerson extends mongoose.Document {
  constructor(object) {
    super(object, RelatedPersonSchema);
    this._type = 'FHIR::RelatedPerson';
  }
};


module.exports.RelatedPersonSchema = RelatedPersonSchema;
module.exports.RelatedPerson = RelatedPerson;
