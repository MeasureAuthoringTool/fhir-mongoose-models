const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SortDirectionSchema } = require('./SortDirection');

const DataRequirementSortSchema = ElementSchemaFunction({
  path: PrimitiveStringSchema,
  direction: SortDirectionSchema,
  typeName: { type: String, default: 'DataRequirementSort' },
  _type: { type: String, default: 'FHIR::DataRequirementSort' },
});

class DataRequirementSort extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementSortSchema);
    this.typeName = 'DataRequirementSort';
    this._type = 'FHIR::DataRequirementSort';
  }
}

module.exports.DataRequirementSortSchema = DataRequirementSortSchema;
module.exports.DataRequirementSort = DataRequirementSort;
