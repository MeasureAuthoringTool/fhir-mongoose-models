const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SearchParameterComponentSchema = BackboneElementSchemaFunction({
   definition : String,
   expression : String,
   fhirTitle: { type: String, default: 'SearchParameterComponent' },
});

class SearchParameterComponent extends mongoose.Document {
  constructor(object) {
    super(object, SearchParameterComponentSchema);
    this._type = 'FHIR::SearchParameterComponent';
  }
};


module.exports.SearchParameterComponentSchema = SearchParameterComponentSchema;
module.exports.SearchParameterComponent = SearchParameterComponent;
