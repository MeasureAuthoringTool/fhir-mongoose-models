const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FilterOperatorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FilterOperator' },
});

class FilterOperator extends mongoose.Document {
  constructor(object) {
    super(object, FilterOperatorSchema);
    this._type = 'FHIR::FilterOperator';
  }
};


module.exports.FilterOperatorSchema = FilterOperatorSchema;
module.exports.FilterOperator = FilterOperator;
