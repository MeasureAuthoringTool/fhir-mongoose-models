const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EnableWhenBehaviorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EnableWhenBehavior' },
});

class EnableWhenBehavior extends mongoose.Document {
  constructor(object) {
    super(object, EnableWhenBehaviorSchema);
    this._type = 'FHIR::EnableWhenBehavior';
  }
};


module.exports.EnableWhenBehaviorSchema = EnableWhenBehaviorSchema;
module.exports.EnableWhenBehavior = EnableWhenBehavior;
