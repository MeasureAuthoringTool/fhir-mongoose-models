const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MarketingStatusSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPackagedBatchIdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPackagedPackageItemSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPackagedSchema } = require('./allSchemaHeaders.js');

MedicinalProductPackagedSchema.add(DomainResourceSchema);
MedicinalProductPackagedSchema.remove('id');
MedicinalProductPackagedSchema.add({
  identifier: [IdentifierSchema],
  subject: [ReferenceSchema],
  description: PrimitiveStringSchema,
  legalStatusOfSupply: CodeableConceptSchema,
  marketingStatus: [MarketingStatusSchema],
  marketingAuthorization: ReferenceSchema,
  manufacturer: [ReferenceSchema],
  batchIdentifier: [MedicinalProductPackagedBatchIdentifierSchema],
  packageItem: [MedicinalProductPackagedPackageItemSchema],
});

module.exports.MedicinalProductPackagedSchema = MedicinalProductPackagedSchema;
