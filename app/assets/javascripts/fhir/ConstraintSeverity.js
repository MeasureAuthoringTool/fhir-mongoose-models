const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConstraintSeveritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConstraintSeverity' },
});

class ConstraintSeverity extends mongoose.Document {
  constructor(object) {
    super(object, ConstraintSeveritySchema);
    this._type = 'FHIR::ConstraintSeverity';
  }
};


module.exports.ConstraintSeveritySchema = ConstraintSeveritySchema;
module.exports.ConstraintSeverity = ConstraintSeverity;
