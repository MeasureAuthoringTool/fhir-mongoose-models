const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PractitionerRoleAvailableTimeSchema } = require('./PractitionerRoleAvailableTime');
const { PractitionerRoleNotAvailableSchema } = require('./PractitionerRoleNotAvailable');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PractitionerRoleSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   period : PeriodSchema,
   practitioner : ReferenceSchema,
   organization : ReferenceSchema,
   code : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   location : [ReferenceSchema],
   healthcareService : [ReferenceSchema],
   telecom : [ContactPointSchema],
   availableTime : [PractitionerRoleAvailableTimeSchema],
   notAvailable : [PractitionerRoleNotAvailableSchema],
   availabilityExceptions : String,
   endpoint : [ReferenceSchema],
   fhirTitle: { type: String, default: 'PractitionerRole' },
});

class PractitionerRole extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleSchema);
    this._type = 'FHIR::PractitionerRole';
  }
};


module.exports.PractitionerRoleSchema = PractitionerRoleSchema;
module.exports.PractitionerRole = PractitionerRole;
