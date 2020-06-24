const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const UseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'Use' },
});

class Use extends mongoose.Document {
  constructor(object) {
    super(object, UseSchema);
    this._type = 'FHIR::Use';
  }
};


module.exports.UseSchema = UseSchema;
module.exports.Use = Use;
