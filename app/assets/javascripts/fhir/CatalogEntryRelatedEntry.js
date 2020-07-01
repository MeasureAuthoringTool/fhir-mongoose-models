const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CatalogEntryRelationTypeSchema } = require('./CatalogEntryRelationType');
const { ReferenceSchema } = require('./Reference');

const CatalogEntryRelatedEntrySchema = BackboneElementSchemaFunction({
  relationtype: CatalogEntryRelationTypeSchema,
  item: ReferenceSchema,
  typeName: { type: String, default: 'CatalogEntryRelatedEntry' },
  _type: { type: String, default: 'FHIR::CatalogEntryRelatedEntry' },
});

class CatalogEntryRelatedEntry extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntryRelatedEntrySchema);
    this.typeName = 'CatalogEntryRelatedEntry';
    this._type = 'FHIR::CatalogEntryRelatedEntry';
  }
}

module.exports.CatalogEntryRelatedEntrySchema = CatalogEntryRelatedEntrySchema;
module.exports.CatalogEntryRelatedEntry = CatalogEntryRelatedEntry;
