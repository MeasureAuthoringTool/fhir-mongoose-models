const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SearchModifierCodeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SearchModifierCode' },
});

class SearchModifierCode extends mongoose.Document {
  constructor(object) {
    super(object, SearchModifierCodeSchema);
    this._type = 'FHIR::SearchModifierCode';
  }
};


module.exports.SearchModifierCodeSchema = SearchModifierCodeSchema;
module.exports.SearchModifierCode = SearchModifierCode;
