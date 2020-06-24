const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DataRequirementCodeFilterSchema = ElementSchemaFunction({
   path : String,
   searchParam : String,
   valueSet : String,
   code : [CodingSchema],
   fhirTitle: { type: String, default: 'DataRequirementCodeFilter' },
});

class DataRequirementCodeFilter extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementCodeFilterSchema);
    this._type = 'FHIR::DataRequirementCodeFilter';
  }
};


module.exports.DataRequirementCodeFilterSchema = DataRequirementCodeFilterSchema;
module.exports.DataRequirementCodeFilter = DataRequirementCodeFilter;
