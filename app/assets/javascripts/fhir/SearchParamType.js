const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SearchParamTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SearchParamType' },
  _type: { type: String, default: 'FHIR::SearchParamType' },
});

class SearchParamType extends mongoose.Document {
  constructor(object) {
    super(object, SearchParamTypeSchema);
    this.typeName = 'SearchParamType';
    this._type = 'FHIR::SearchParamType';
  }
}

module.exports.SearchParamTypeSchema = SearchParamTypeSchema;
module.exports.SearchParamType = SearchParamType;
