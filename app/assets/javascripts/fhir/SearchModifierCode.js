const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SearchModifierCodeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SearchModifierCode' },
  _type: { type: String, default: 'FHIR::SearchModifierCode' },
});

class SearchModifierCode extends mongoose.Document {
  constructor(object) {
    super(object, SearchModifierCodeSchema);
    this.typeName = 'SearchModifierCode';
    this._type = 'FHIR::SearchModifierCode';
  }
}

module.exports.SearchModifierCodeSchema = SearchModifierCodeSchema;
module.exports.SearchModifierCode = SearchModifierCode;
