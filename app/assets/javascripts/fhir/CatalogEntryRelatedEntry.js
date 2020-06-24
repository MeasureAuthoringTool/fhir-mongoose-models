const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CatalogEntryRelationTypeSchema } = require('./CatalogEntryRelationType');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CatalogEntryRelatedEntrySchema = BackboneElementSchemaFunction({
   relationtype : CatalogEntryRelationTypeSchema,
   item : ReferenceSchema,
   fhirTitle: { type: String, default: 'CatalogEntryRelatedEntry' },
});

class CatalogEntryRelatedEntry extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntryRelatedEntrySchema);
    this._type = 'FHIR::CatalogEntryRelatedEntry';
  }
};


module.exports.CatalogEntryRelatedEntrySchema = CatalogEntryRelatedEntrySchema;
module.exports.CatalogEntryRelatedEntry = CatalogEntryRelatedEntry;
