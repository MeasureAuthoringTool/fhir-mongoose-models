const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CapabilityStatementKindSchema } = require('./CapabilityStatementKind');
const { CodeSearchSupportSchema } = require('./CodeSearchSupport');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { TerminologyCapabilitiesClosureSchema } = require('./TerminologyCapabilitiesClosure');
const { TerminologyCapabilitiesCodeSystemSchema } = require('./TerminologyCapabilitiesCodeSystem');
const { TerminologyCapabilitiesExpansionSchema } = require('./TerminologyCapabilitiesExpansion');
const { TerminologyCapabilitiesImplementationSchema } = require('./TerminologyCapabilitiesImplementation');
const { TerminologyCapabilitiesSoftwareSchema } = require('./TerminologyCapabilitiesSoftware');
const { TerminologyCapabilitiesTranslationSchema } = require('./TerminologyCapabilitiesTranslation');
const { TerminologyCapabilitiesValidateCodeSchema } = require('./TerminologyCapabilitiesValidateCode');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TerminologyCapabilitiesSchema = DomainResourceSchemaFunction({
   url : String,
   version : String,
   name : String,
   title : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   copyright : String,
   kind : CapabilityStatementKindSchema,
   software : TerminologyCapabilitiesSoftwareSchema,
   implementation : TerminologyCapabilitiesImplementationSchema,
   lockedDate : Boolean,
   codeSystem : [TerminologyCapabilitiesCodeSystemSchema],
   expansion : TerminologyCapabilitiesExpansionSchema,
   codeSearch : CodeSearchSupportSchema,
   validateCode : TerminologyCapabilitiesValidateCodeSchema,
   translation : TerminologyCapabilitiesTranslationSchema,
   closure : TerminologyCapabilitiesClosureSchema,
   fhirTitle: { type: String, default: 'TerminologyCapabilities' },
});

class TerminologyCapabilities extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesSchema);
    this._type = 'FHIR::TerminologyCapabilities';
  }
};


module.exports.TerminologyCapabilitiesSchema = TerminologyCapabilitiesSchema;
module.exports.TerminologyCapabilities = TerminologyCapabilities;
