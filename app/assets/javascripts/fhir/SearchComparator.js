const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SearchComparatorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SearchComparator' },
});

class SearchComparator extends mongoose.Document {
  constructor(object) {
    super(object, SearchComparatorSchema);
    this._type = 'FHIR::SearchComparator';
  }
};


module.exports.SearchComparatorSchema = SearchComparatorSchema;
module.exports.SearchComparator = SearchComparator;
