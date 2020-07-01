const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DataRequirementCodeFilterSchema = ElementSchemaFunction({
  path: PrimitiveStringSchema,
  searchParam: PrimitiveStringSchema,
  valueSet: PrimitiveCanonicalSchema,
  code: [CodingSchema],
  typeName: { type: String, default: 'DataRequirementCodeFilter' },
  _type: { type: String, default: 'FHIR::DataRequirementCodeFilter' },
});

class DataRequirementCodeFilter extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementCodeFilterSchema);
    this.typeName = 'DataRequirementCodeFilter';
    this._type = 'FHIR::DataRequirementCodeFilter';
  }
}

module.exports.DataRequirementCodeFilterSchema = DataRequirementCodeFilterSchema;
module.exports.DataRequirementCodeFilter = DataRequirementCodeFilter;
