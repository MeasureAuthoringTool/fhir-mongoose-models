const { CatalogEntryRelatedEntrySchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CatalogEntrySchema } = require('./allSchemaHeaders.js');

CatalogEntrySchema.add(DomainResourceSchema);
CatalogEntrySchema.remove('id');
CatalogEntrySchema.add({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  orderable: PrimitiveBooleanSchema,
  referencedItem: ReferenceSchema,
  additionalIdentifier: [IdentifierSchema],
  classification: [CodeableConceptSchema],
  status: PublicationStatusSchema,
  validityPeriod: PeriodSchema,
  validTo: PrimitiveDateTimeSchema,
  lastUpdated: PrimitiveDateTimeSchema,
  additionalCharacteristic: [CodeableConceptSchema],
  additionalClassification: [CodeableConceptSchema],
  relatedEntry: [CatalogEntryRelatedEntrySchema],
});

module.exports.CatalogEntrySchema = CatalogEntrySchema;
