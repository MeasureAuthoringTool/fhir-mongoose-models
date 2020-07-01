const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { ImplementationGuideDefinitionSchema } = require('./ImplementationGuideDefinition');
const { ImplementationGuideDependsOnSchema } = require('./ImplementationGuideDependsOn');
const { ImplementationGuideGlobalSchema } = require('./ImplementationGuideGlobal');
const { ImplementationGuideManifestSchema } = require('./ImplementationGuideManifest');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { SPDXLicenseSchema } = require('./SPDXLicense');
const { UsageContextSchema } = require('./UsageContext');

const ImplementationGuideSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  packageId: PrimitiveIdSchema,
  license: SPDXLicenseSchema,
  fhirVersion: [FHIRVersionSchema],
  dependsOn: [ImplementationGuideDependsOnSchema],
  global: [ImplementationGuideGlobalSchema],
  definition: ImplementationGuideDefinitionSchema,
  manifest: ImplementationGuideManifestSchema,
  typeName: { type: String, default: 'ImplementationGuide' },
  _type: { type: String, default: 'FHIR::ImplementationGuide' },
});

class ImplementationGuide extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideSchema);
    this.typeName = 'ImplementationGuide';
    this._type = 'FHIR::ImplementationGuide';
  }
}

module.exports.ImplementationGuideSchema = ImplementationGuideSchema;
module.exports.ImplementationGuide = ImplementationGuide;
