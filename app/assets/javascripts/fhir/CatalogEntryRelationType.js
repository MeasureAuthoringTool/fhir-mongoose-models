const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CatalogEntryRelationTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CatalogEntryRelationType' },
});

class CatalogEntryRelationType extends mongoose.Document {
  constructor(object) {
    super(object, CatalogEntryRelationTypeSchema);
    this._type = 'FHIR::CatalogEntryRelationType';
  }
};


module.exports.CatalogEntryRelationTypeSchema = CatalogEntryRelationTypeSchema;
module.exports.CatalogEntryRelationType = CatalogEntryRelationType;
