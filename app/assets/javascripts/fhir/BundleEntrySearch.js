const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { SearchEntryModeSchema } = require('./SearchEntryMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BundleEntrySearchSchema = BackboneElementSchemaFunction({
   mode : SearchEntryModeSchema,
   score : Number,
   fhirTitle: { type: String, default: 'BundleEntrySearch' },
});

class BundleEntrySearch extends mongoose.Document {
  constructor(object) {
    super(object, BundleEntrySearchSchema);
    this._type = 'FHIR::BundleEntrySearch';
  }
};


module.exports.BundleEntrySearchSchema = BundleEntrySearchSchema;
module.exports.BundleEntrySearch = BundleEntrySearch;
