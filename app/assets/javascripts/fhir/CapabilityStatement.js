const mongoose = require('mongoose/browser');
const { CapabilityStatementDocumentSchema } = require('./CapabilityStatementDocument');
const { CapabilityStatementImplementationSchema } = require('./CapabilityStatementImplementation');
const { CapabilityStatementKindSchema } = require('./CapabilityStatementKind');
const { CapabilityStatementMessagingSchema } = require('./CapabilityStatementMessaging');
const { CapabilityStatementRestSchema } = require('./CapabilityStatementRest');
const { CapabilityStatementSoftwareSchema } = require('./CapabilityStatementSoftware');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const CapabilityStatementSchema = DomainResourceSchemaFunction({
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
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  kind: CapabilityStatementKindSchema,
  instantiates: [PrimitiveCanonicalSchema],
  imports: [PrimitiveCanonicalSchema],
  software: CapabilityStatementSoftwareSchema,
  implementation: CapabilityStatementImplementationSchema,
  fhirVersion: FHIRVersionSchema,
  format: [MimeTypeSchema],
  patchFormat: [MimeTypeSchema],
  implementationGuide: [PrimitiveCanonicalSchema],
  rest: [CapabilityStatementRestSchema],
  messaging: [CapabilityStatementMessagingSchema],
  document: [CapabilityStatementDocumentSchema],
  typeName: { type: String, default: 'CapabilityStatement' },
  _type: { type: String, default: 'FHIR::CapabilityStatement' },
});

class CapabilityStatement extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementSchema);
    this.typeName = 'CapabilityStatement';
    this._type = 'FHIR::CapabilityStatement';
  }
}

module.exports.CapabilityStatementSchema = CapabilityStatementSchema;
module.exports.CapabilityStatement = CapabilityStatement;
