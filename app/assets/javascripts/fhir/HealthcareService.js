const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { HealthcareServiceAvailableTimeSchema } = require('./HealthcareServiceAvailableTime');
const { HealthcareServiceEligibilitySchema } = require('./HealthcareServiceEligibility');
const { HealthcareServiceNotAvailableSchema } = require('./HealthcareServiceNotAvailable');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HealthcareServiceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   providedBy : ReferenceSchema,
   category : [CodeableConceptSchema],
   type : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   location : [ReferenceSchema],
   name : String,
   comment : String,
   extraDetails : String,
   photo : AttachmentSchema,
   telecom : [ContactPointSchema],
   coverageArea : [ReferenceSchema],
   serviceProvisionCode : [CodeableConceptSchema],
   eligibility : [HealthcareServiceEligibilitySchema],
   program : [CodeableConceptSchema],
   characteristic : [CodeableConceptSchema],
   communication : [CodeableConceptSchema],
   referralMethod : [CodeableConceptSchema],
   appointmentRequired : Boolean,
   availableTime : [HealthcareServiceAvailableTimeSchema],
   notAvailable : [HealthcareServiceNotAvailableSchema],
   availabilityExceptions : String,
   endpoint : [ReferenceSchema],
   fhirTitle: { type: String, default: 'HealthcareService' },
});

class HealthcareService extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceSchema);
    this._type = 'FHIR::HealthcareService';
  }
};


module.exports.HealthcareServiceSchema = HealthcareServiceSchema;
module.exports.HealthcareService = HealthcareService;
