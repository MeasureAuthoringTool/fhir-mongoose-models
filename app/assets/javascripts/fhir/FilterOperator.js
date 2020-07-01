const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FilterOperatorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FilterOperator' },
  _type: { type: String, default: 'FHIR::FilterOperator' },
});

class FilterOperator extends mongoose.Document {
  constructor(object) {
    super(object, FilterOperatorSchema);
    this.typeName = 'FilterOperator';
    this._type = 'FHIR::FilterOperator';
  }
}

module.exports.FilterOperatorSchema = FilterOperatorSchema;
module.exports.FilterOperator = FilterOperator;
