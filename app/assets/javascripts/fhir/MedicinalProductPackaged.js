const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MarketingStatusSchema } = require('./MarketingStatus');
const { MedicinalProductPackagedBatchIdentifierSchema } = require('./MedicinalProductPackagedBatchIdentifier');
const { MedicinalProductPackagedPackageItemSchema } = require('./MedicinalProductPackagedPackageItem');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductPackagedSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  subject: [ReferenceSchema],
  description: PrimitiveStringSchema,
  legalStatusOfSupply: CodeableConceptSchema,
  marketingStatus: [MarketingStatusSchema],
  marketingAuthorization: ReferenceSchema,
  manufacturer: [ReferenceSchema],
  batchIdentifier: [MedicinalProductPackagedBatchIdentifierSchema],
  packageItem: [MedicinalProductPackagedPackageItemSchema],
  typeName: { type: String, default: 'MedicinalProductPackaged' },
  _type: { type: String, default: 'FHIR::MedicinalProductPackaged' },
});

class MedicinalProductPackaged extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedSchema);
    this.typeName = 'MedicinalProductPackaged';
    this._type = 'FHIR::MedicinalProductPackaged';
  }
}

module.exports.MedicinalProductPackagedSchema = MedicinalProductPackagedSchema;
module.exports.MedicinalProductPackaged = MedicinalProductPackaged;
