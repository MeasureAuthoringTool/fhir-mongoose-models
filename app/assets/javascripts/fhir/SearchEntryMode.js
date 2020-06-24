const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SearchEntryModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SearchEntryMode' },
});

class SearchEntryMode extends mongoose.Document {
  constructor(object) {
    super(object, SearchEntryModeSchema);
    this._type = 'FHIR::SearchEntryMode';
  }
};


module.exports.SearchEntryModeSchema = SearchEntryModeSchema;
module.exports.SearchEntryMode = SearchEntryMode;
