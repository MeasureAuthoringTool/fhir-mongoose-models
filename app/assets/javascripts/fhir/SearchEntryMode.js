const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SearchEntryModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SearchEntryMode' },
  _type: { type: String, default: 'FHIR::SearchEntryMode' },
});

class SearchEntryMode extends mongoose.Document {
  constructor(object) {
    super(object, SearchEntryModeSchema);
    this.typeName = 'SearchEntryMode';
    this._type = 'FHIR::SearchEntryMode';
  }
}

module.exports.SearchEntryModeSchema = SearchEntryModeSchema;
module.exports.SearchEntryMode = SearchEntryMode;
