const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SearchComparatorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SearchComparator' },
  _type: { type: String, default: 'FHIR::SearchComparator' },
});

class SearchComparator extends mongoose.Document {
  constructor(object) {
    super(object, SearchComparatorSchema);
    this.typeName = 'SearchComparator';
    this._type = 'FHIR::SearchComparator';
  }
}

module.exports.SearchComparatorSchema = SearchComparatorSchema;
module.exports.SearchComparator = SearchComparator;
