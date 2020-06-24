const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SortDirectionSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SortDirection' },
});

class SortDirection extends mongoose.Document {
  constructor(object) {
    super(object, SortDirectionSchema);
    this._type = 'FHIR::SortDirection';
  }
};


module.exports.SortDirectionSchema = SortDirectionSchema;
module.exports.SortDirection = SortDirection;
