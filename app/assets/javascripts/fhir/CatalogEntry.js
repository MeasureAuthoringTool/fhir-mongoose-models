const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CatalogEntryRelatedEntrySchema } = require('./CatalogEntryRelatedEntry');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CatalogEntrySchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   orderable : Boolean,
   referencedItem : ReferenceSchema,
   additionalIdentifier : [IdentifierSchema],
   classification : [CodeableConceptSchema],
   status : PublicationStatusSchema,
   validityPeriod : PeriodSchema,
   validTo : DateTime,
   lastUpdated : DateTime,
   additionalCharacteristic : [CodeableConceptSchema],
   additionalClassification : [CodeableConceptSchema],
   relatedEntry : [CatalogEntryRelatedEntrySchema],
   fhirTitle: { type: String, default: 'CatalogEntry' },
});

class CatalogEntry extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntrySchema);
    this._type = 'FHIR::CatalogEntry';
  }
};


module.exports.CatalogEntrySchema = CatalogEntrySchema;
module.exports.CatalogEntry = CatalogEntry;
