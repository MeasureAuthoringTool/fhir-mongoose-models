const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HTTPVerbSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'HTTPVerb' },
});

class HTTPVerb extends mongoose.Document {
  constructor(object) {
    super(object, HTTPVerbSchema);
    this._type = 'FHIR::HTTPVerb';
  }
};


module.exports.HTTPVerbSchema = HTTPVerbSchema;
module.exports.HTTPVerb = HTTPVerb;
