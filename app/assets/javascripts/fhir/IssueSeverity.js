const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const IssueSeveritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'IssueSeverity' },
});

class IssueSeverity extends mongoose.Document {
  constructor(object) {
    super(object, IssueSeveritySchema);
    this._type = 'FHIR::IssueSeverity';
  }
};


module.exports.IssueSeveritySchema = IssueSeveritySchema;
module.exports.IssueSeverity = IssueSeverity;
