const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CapabilityStatementDocumentSchema } = require('./CapabilityStatementDocument');
const { CapabilityStatementImplementationSchema } = require('./CapabilityStatementImplementation');
const { CapabilityStatementKindSchema } = require('./CapabilityStatementKind');
const { CapabilityStatementMessagingSchema } = require('./CapabilityStatementMessaging');
const { CapabilityStatementRestSchema } = require('./CapabilityStatementRest');
const { CapabilityStatementSoftwareSchema } = require('./CapabilityStatementSoftware');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { MimeTypeSchema } = require('./MimeType');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementSchema = DomainResourceSchemaFunction({
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
   instantiates : [String],
   imports : [String],
   software : CapabilityStatementSoftwareSchema,
   implementation : CapabilityStatementImplementationSchema,
   fhirVersion : FHIRVersionSchema,
   format : [MimeTypeSchema],
   patchFormat : [MimeTypeSchema],
   implementationGuide : [String],
   rest : [CapabilityStatementRestSchema],
   messaging : [CapabilityStatementMessagingSchema],
   document : [CapabilityStatementDocumentSchema],
   fhirTitle: { type: String, default: 'CapabilityStatement' },
});

class CapabilityStatement extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementSchema);
    this._type = 'FHIR::CapabilityStatement';
  }
};


module.exports.CapabilityStatementSchema = CapabilityStatementSchema;
module.exports.CapabilityStatement = CapabilityStatement;
