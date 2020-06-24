const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { SortDirectionSchema } = require('./SortDirection');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DataRequirementSortSchema = ElementSchemaFunction({
   path : String,
   direction : SortDirectionSchema,
   fhirTitle: { type: String, default: 'DataRequirementSort' },
});

class DataRequirementSort extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementSortSchema);
    this._type = 'FHIR::DataRequirementSort';
  }
};


module.exports.DataRequirementSortSchema = DataRequirementSortSchema;
module.exports.DataRequirementSort = DataRequirementSort;
