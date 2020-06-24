const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DurationSchema } = require('./Duration');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./Period');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DataRequirementDateFilterSchema = ElementSchemaFunction({
   path : String,
   searchParam : String,
   valueDateTime : DateTime,
   valuePeriod : PeriodSchema,
   valueDuration : DurationSchema,
   fhirTitle: { type: String, default: 'DataRequirementDateFilter' },
});

class DataRequirementDateFilter extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementDateFilterSchema);
    this._type = 'FHIR::DataRequirementDateFilter';
  }
};


module.exports.DataRequirementDateFilterSchema = DataRequirementDateFilterSchema;
module.exports.DataRequirementDateFilter = DataRequirementDateFilter;
