const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./FilterOperator');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetComposeIncludeFilterSchema = BackboneElementSchemaFunction({
   property : String,
   op : FilterOperatorSchema,
   value : String,
   fhirTitle: { type: String, default: 'ValueSetComposeIncludeFilter' },
});

class ValueSetComposeIncludeFilter extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeFilterSchema);
    this._type = 'FHIR::ValueSetComposeIncludeFilter';
  }
};


module.exports.ValueSetComposeIncludeFilterSchema = ValueSetComposeIncludeFilterSchema;
module.exports.ValueSetComposeIncludeFilter = ValueSetComposeIncludeFilter;
