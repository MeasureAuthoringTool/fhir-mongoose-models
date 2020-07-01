const mongoose = require('mongoose/browser');
const { CatalogEntryRelatedEntrySchema } = require('./CatalogEntryRelatedEntry');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');

const CatalogEntrySchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'CatalogEntry' },
  _type: { type: String, default: 'FHIR::CatalogEntry' },
});

class CatalogEntry extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntrySchema);
    this.typeName = 'CatalogEntry';
    this._type = 'FHIR::CatalogEntry';
  }
}

module.exports.CatalogEntrySchema = CatalogEntrySchema;
module.exports.CatalogEntry = CatalogEntry;
