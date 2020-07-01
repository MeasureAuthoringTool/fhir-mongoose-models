const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { SearchEntryModeSchema } = require('./SearchEntryMode');

const BundleEntrySearchSchema = BackboneElementSchemaFunction({
  mode: SearchEntryModeSchema,
  score: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'BundleEntrySearch' },
  _type: { type: String, default: 'FHIR::BundleEntrySearch' },
});

class BundleEntrySearch extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntrySearchSchema);
    this.typeName = 'BundleEntrySearch';
    this._type = 'FHIR::BundleEntrySearch';
  }
}

module.exports.BundleEntrySearchSchema = BundleEntrySearchSchema;
module.exports.BundleEntrySearch = BundleEntrySearch;
