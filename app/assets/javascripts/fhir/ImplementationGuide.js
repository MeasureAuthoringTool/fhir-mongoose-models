const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { ImplementationGuideDefinitionSchema } = require('./ImplementationGuideDefinition');
const { ImplementationGuideDependsOnSchema } = require('./ImplementationGuideDependsOn');
const { ImplementationGuideGlobalSchema } = require('./ImplementationGuideGlobal');
const { ImplementationGuideManifestSchema } = require('./ImplementationGuideManifest');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { SPDXLicenseSchema } = require('./SPDXLicense');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideSchema = DomainResourceSchemaFunction({
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
   copyright : String,
   packageId : String,
   license : SPDXLicenseSchema,
   fhirVersion : [FHIRVersionSchema],
   dependsOn : [ImplementationGuideDependsOnSchema],
   global : [ImplementationGuideGlobalSchema],
   definition : ImplementationGuideDefinitionSchema,
   manifest : ImplementationGuideManifestSchema,
   fhirTitle: { type: String, default: 'ImplementationGuide' },
});

class ImplementationGuide extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideSchema);
    this._type = 'FHIR::ImplementationGuide';
  }
};


module.exports.ImplementationGuideSchema = ImplementationGuideSchema;
module.exports.ImplementationGuide = ImplementationGuide;
