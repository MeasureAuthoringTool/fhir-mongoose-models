const mongoose = require('mongoose/browser');
const { DurationSchema } = require('./Duration');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DataRequirementDateFilterSchema = ElementSchemaFunction({
  path: PrimitiveStringSchema,
  searchParam: PrimitiveStringSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valuePeriod: PeriodSchema,
  valueDuration: DurationSchema,
  typeName: { type: String, default: 'DataRequirementDateFilter' },
  _type: { type: String, default: 'FHIR::DataRequirementDateFilter' },
});

class DataRequirementDateFilter extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementDateFilterSchema);
    this.typeName = 'DataRequirementDateFilter';
    this._type = 'FHIR::DataRequirementDateFilter';
  }
}

module.exports.DataRequirementDateFilterSchema = DataRequirementDateFilterSchema;
module.exports.DataRequirementDateFilter = DataRequirementDateFilter;
