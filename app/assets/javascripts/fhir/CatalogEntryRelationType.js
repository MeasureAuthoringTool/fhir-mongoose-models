const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CatalogEntryRelationTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CatalogEntryRelationType' },
  _type: { type: String, default: 'FHIR::CatalogEntryRelationType' },
});

class CatalogEntryRelationType extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntryRelationTypeSchema);
    this.typeName = 'CatalogEntryRelationType';
    this._type = 'FHIR::CatalogEntryRelationType';
  }
}

module.exports.CatalogEntryRelationTypeSchema = CatalogEntryRelationTypeSchema;
module.exports.CatalogEntryRelationType = CatalogEntryRelationType;
